<template>
  <div class='right'>
    <div class='title'>{{title}}</div>
    <div class='s-title'>{{s_title}}</div>
    <div class='upload'>
      <!-- <div class='img'>
        <img src='@/assets/img/main01.jpg'>
      </div> -->
      <div class='editor' v-html='content'>
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
      getData: ""
    };
  },

  methods: {
    getContainer(num) {
      this.$axios
        .get("/connect/get/profile_in.php?id=" + num, {})
        .then(response => {
          if (response.data.status == "error") {
            this.Datas = {};
          } else {
            this.Datas = response.data;
            this.content = response.data.content;
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
      this.$axios.get("/connect/get/profile.php", {}).then(response => {
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