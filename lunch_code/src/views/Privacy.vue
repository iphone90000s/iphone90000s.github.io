<template>
    <div class="main-content">
        <topmenu></topmenu>        
        <div class='inner-page' v-html='Datas.privacy'>

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
      Datas: null
    };
  },
  methods: {},
  mounted: function() {},
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    this.$axios.get("/connect/get/privacy.php", {}).then(response => {
      //找分類
      if (response.data.status == "error") {
        vm.Datas = {};
      } else {
        vm.Datas = response.data;
      }
    });
  }
};
</script>

<style lang='scss'>
.inner-page {
  svg {
    position: absolute;
    z-index: 10;
    font-size: 16px;
    color: #464646;
    right: 25px;
    top: 15px;
  }
}
</style>