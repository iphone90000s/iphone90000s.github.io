<template>
    <div class='right'>
        <div class='title'>{{title}}</div>
        <div class='s-title'>{{s_title}}</div>
        <div class='news_upload' v-html='content'>
        </div>
    </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      KindData: {}, //分類
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: ""
    };
  },

  methods: {},
  computed: {},
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    this.$axios.get("/connect/get/news_in.php?id=" + vm.ids, {}).then(response => {
      //找分類
      if (response.data.status == "error") {
        vm.KindData = {};
      } else {
        vm.title = response.data[0].title;
        vm.s_title = response.data[0].s_title;
        vm.content = response.data[0].content;
      }
    });
  }
};
</script>