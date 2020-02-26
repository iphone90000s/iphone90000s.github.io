<template>
  <div class='right'>
    <div class='title'>{{title}}</div>
    <div class='s-title'>{{s_title}}</div>
    <div class='photo_router_in'>
      <div class='photo_upload' v-for="(list, index) in Datas" :key="index">
        <div class='photo_list'>
          <VuePureLightbox  :thumbnail="baseurl+'/connect/upload/photo/'+list.image" :images="[baseurl+'/connect/upload/photo/'+list.image]"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePureLightbox from "vue-pure-lightbox";
export default {
  name: "app",
  components: {
    VuePureLightbox
  },
  data() {
    return {
      baseurl: this.GLOBAL.BASE_URL,
      KindData: {}, //分類
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: "",
      ids: "",
      hi: "0",
      getData: "",
      images: [
        {
          src: "http://example.com/image.jpg"
        }
      ]
    };
  },

  methods: {
    getContainer(num) {
      this.$axios
        .get("/connect/get/photo_in.php?kind=" + num, {})
        .then(response => {
          if (response.data.status == "error") {
            this.Datas = {};
          } else {
            this.Datas = response.data;
          }
        });
    }
  },
  // mounted: function() {},
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    vm.title = this.$route.params.title;
    vm.s_title = this.$route.params.s_title;

    if (typeof vm.ids === "undefined") {
      this.$axios.get("/connect/get/photo.php", {}).then(response => {
        if (response.data.status == "error") {
          vm.KindData = {};
        } else {
          vm.KindData = response.data;
          vm.ids = vm.KindData[0].serial;
          vm.title = vm.KindData[0].title;
          vm.s_title = vm.KindData[0].s_title;
          this.getContainer(vm.ids);
        }
      });
    } else {
      this.getContainer(vm.ids);
    }
  }
};
</script>