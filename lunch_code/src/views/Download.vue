<template>
    <div class="main-content">
        <topmenu></topmenu>        
        <div class='inner-page'>
          <div class='banner block'>
            <img v-if='this.image' :src="baseurl+'/connect/upload/ogimage/'+this.image">
            <div class='banner_text'>
              <div class='text1'>{{bannerTitle}}</div>
              <div class='text2'>{{bannerTitle2}}</div>
            </div>
          </div>
          <div class='contents block'>
            <div class='left'>
              <div class='title'>檔案下載</div>
              <div class='en_title'>Download</div>
              <ul>
                <li v-for="(list, index) in KindData" :key="index">
                  <router-link :to="{name:'download',params:{id:list.serial,title:list.title,s_title:list.s_title}}">{{list.title}}</router-link>
                </li>
              </ul>
            </div>
            <router-view :key='key'></router-view>
          </div>
        </div>
        <Footer></Footer>   
    </div>
</template>

<script>
import Topmenu from "../components/topmenu.vue";
import Footer from "../components/footer.vue";
export default {
  name: "app",
  components: {
    Topmenu,
    Footer
  },
  data() {
    return {
      baseurl: this.GLOBAL.BASE_URL,
      KindData: {}, //分類
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: "",
      bannerTitle: "",
      bannerTitle2: "",
      image: ""
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
    formData.append("options", "6");
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
    this.$axios.get("/connect/get/download.php", {}).then(response => {
      //找分類
      if (response.data.status == "error") {
        vm.KindData = {};
      } else {
        vm.KindData = response.data;
      }
    });
  }
};
</script>