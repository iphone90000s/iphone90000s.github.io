<template>
    <ol class="breadcrumb">
        <li class="breadcrumb-item">
            <router-link to="/admin/option">首頁</router-link>
        </li>
        <li class="breadcrumb-item active">
            <router-link :to="nextUrl">{{nextName}}</router-link>
        </li>
    </ol>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  mounted: function() {},
  props: ["nextName", "nextUrl"]
};
</script>

<style scoped lang='scss'>
.breadcrumb {
  background-color: #fff;
}
</style>