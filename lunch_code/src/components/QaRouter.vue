<template>
  <div class='right'>
    <div class='title'>{{title}}</div>
    <div class='s-title'>{{s_title}}</div>
    <div class='qa_upload' v-for="(list, index) in Datas" :key="index">
      <div class='qa_list'>
        <div class='question' @click='showQa(index)'>{{list.title}}</div>
        <transition name="fade">
          <div class='answer' v-if='index == show'>{{list.content}}</div>  
        </transition>
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
      getData: "",
      show: -1
      // show: false
    };
  },
  methods: {
    showQa: function(index) {
      this.show = index;
    },
    getContainer(num) {
      this.$axios.get("/connect/get/qa_in.php?kind=" + num, {}).then(response => {
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
      this.$axios.get("/connect/get/qa.php", {}).then(response => {
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