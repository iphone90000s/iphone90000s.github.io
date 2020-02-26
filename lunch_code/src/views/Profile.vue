<template>
  <div class="main-content">
    <topmenu></topmenu>
    <div class="inner-page">
      <div class="banner block">
        <!-- <img v-for="i in 3" :src="require(`./assets/cat${i}.jpg`)"> -->
        <img v-if="this.image" :src="baseurl+'/connect/upload/ogimage/'+this.image" />
        <div class="banner_text">
          <div class="text1">{{bannerTitle}}</div>
          <div class="text2">{{bannerTitle2}}</div>
        </div>
      </div>
      <div class="contents block">
        <div class="left">
          <div class="title">網站簡介</div>
          <div class="en_title">Introduction</div>
          <ul>
            <li v-for="(list, index) in Datas" :key="index">
              <router-link
                :to="{name:'profile',params:{id:list.serial,title:list.title,s_title:list.s_title}}"
              >{{list.title}}</router-link>
            </li>
          </ul>
        </div>

        <router-view :key="key"></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Topmenu from "../components/topmenu.vue";
import Footer from "../components/footer.vue";

// import CKEDITOR from "CKEDITOR";
export default {
  name: "app",
  components: {
    Topmenu,
    Footer
  },
  mounted: function() {},

  data() {
    return {
      baseurl: this.GLOBAL.BASE_URL,
      Datas: {},
      ids: "",
      title: "",
      s_title: "",
      content: "",
      bannerTitle: "",
      bannerTitle2: "",
      image: "",
      contents: ""
    };
  },
  methods: {},
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  },
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    let formData = new FormData();
    formData.append("options", "1");
    this.$axios
      .post("/connect/get/options.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status == "error") {
          vm.Datas = {};
        } else {
          this.bannerTitle = response.data.title1;
          this.bannerTitle2 = response.data.title2;
          this.image = response.data.image;
        }
      });
    this.$axios.get("/connect/get/profile.php", {}).then(response => {
      if (response.data.status == "error") {
        vm.Datas = {};
      } else {
        vm.Datas = response.data;
        if (typeof vm.ids !== "undefined") {
          vm.Datas.forEach(function(index) {
            if (index.serial == vm.ids) {
              vm.title = index.title;
              vm.s_title = index.s_title;
              vm.content = index.content;
            }
          });
        } else {
          vm.title = response.data[0].title;
          vm.s_title = response.data[0].s_title;
          vm.content = response.data[0].content;
        }
      }
    });
  }
  // updated: function() {
  //   const vm = this;
  //   vm.ids = this.$route.params.id;
  //   this.$axios.get("/connect/get/profile.php", {}).then(response => {
  //     if (response.data.status == "error") {
  //       vm.Datas = {};
  //     } else {
  //       vm.Datas = response.data;
  //       if (typeof vm.ids !== "undefined") {
  //         vm.Datas.forEach(function(index) {
  //           if (index.serial == vm.ids) {
  //             vm.title = index.title;
  //             vm.s_title = index.s_title;
  //             vm.content = index.content;
  //           }
  //         });
  //       } else {
  //         vm.title = response.data[0].title;
  //         vm.s_title = response.data[0].s_title;
  //         vm.content = response.data[0].content;
  //       }
  //     }
  //   });
  // }
};
</script>