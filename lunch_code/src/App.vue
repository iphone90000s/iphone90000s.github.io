<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  name: "app",
  data() {
    return {};
  },
  computed: {},
  methods: {
    checkLogin() {
      this.$store.dispatch("checkLoging", this.$cookies.get("status"));
      if (this.$store.getters.getCheckLoing) {
        this.$router.push({ name: "shopcar" });
      } else {
        alert("請先登入");
        this.$router.push({ name: "login" });
      }
    }
  },
  mounted: function() {
    // window.onbeforeunload = function(ev) {
    //   ev = window.event || ev;
    //   ev.returnValue = "系統可能不會除存您的資料，確定離開當前頁面嗎？";
    // };
  },

  created() {}
};
</script>

<style>
</style>
