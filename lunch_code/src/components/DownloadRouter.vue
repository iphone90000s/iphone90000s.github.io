<template>
  <div class='right'>
    <div class='title'>{{title}}</div>
    <div class='s-title'>{{s_title}}</div>
    <div class='downaload_upload'>
      <div class='download_list'  v-for="(list, index) in Datas" :key="index">
        <a :href="'/connect/download/download_in.php?id='+list.serial" target='_blank'>
          <div class='title'>{{list.filetitle}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      KindData: {}, //分類
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: "",
      ids: "",
      hi: "0",
      getData: ""
    };
  },

  methods: {
    getContainer(num) {
      this.$axios
        .get("/connect/get/download_in.php?kind=" + num, {})
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
      this.$axios.get("/connect/get/download.php", {}).then(response => {
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