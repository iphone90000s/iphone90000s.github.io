<template>
  <div class="main-content">
    <div class="top-menu">
      <div class="title">訂餐系統</div>
    </div>
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  name: "app",
  components: {},
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  },
  methods: {},
  data() {
    return {};
  },

  mounted: function() {},
  created() {}
};
</script>

<style>
</style>
