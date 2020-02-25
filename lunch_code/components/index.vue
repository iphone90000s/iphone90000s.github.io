<template>
  <div>
    <div class="content">
      <router-link class="btns" :to="{name:'ricebox'}">便當類</router-link>
      <router-link class="btns" :to="{name:'drink'}">飲料類</router-link>
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="text">您目前的購物車有 {{cartCount}} 件商品</div>
      <router-link class="new-btns" :to="{name:'order'}">前往購物車</router-link>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  name: "app",
  components: {},
  computed: {
    cartCount() {
      return this.$store.getters.getCart.length;
    },
    key() {
      return this.$route.path + Math.random();
    }
  },
  methods: {
    checkOrder: function(list) {
      this.show = true;
      this.order.name = list.name;
    },
    closeframe: function() {
      this.show = false;
    }
  },
  data() {
    return {
      show: false,
      order: {
        name: ""
      }
    };
  },

  mounted: function() {},
  created() {}
};
</script>

<style>
</style>
