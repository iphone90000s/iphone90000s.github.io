<template>
  <div></div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      Datas: null
    };
  },
  methods: {
    deleteCookie() {
      if (this.$cookies.get("status")) {
        this.$cookies.set("status", "exit", 1);
      }
      alert("登出成功");
      this.$router.go(-1);
    }
  },
  mounted: function() {},
  created() {
    this.deleteCookie();
  }
};
</script>
