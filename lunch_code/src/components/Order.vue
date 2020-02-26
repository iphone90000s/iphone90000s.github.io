<template>
  <div class="cart-frame">
    <div>您目前訂購的商品為</div>
    <div class="th" v-if="window.width > 768">
      <div class="th-in">商品名稱</div>
      <div class="th-in">尺寸</div>
      <div class="th-in">備註</div>
      <div class="th-in">單價</div>
      <div class="th-in">數量</div>
      <div class="th-in">總價</div>
      <div class="th-in">刪除</div>
    </div>
    <div class="td" v-for="(list, index) in cart" :key="index">
      <div class="td-in">
        <font v-if="window.width <= 768">商品名稱：</font>
        <font v-if="list.name">{{list.name}}</font>
      </div>
      <div class="td-in">
        <font v-if="window.width <= 768">尺寸：</font>
        <font v-if="list.size">{{list.size}}</font>
      </div>
      <div class="td-in">
        <font v-if="window.width <= 768">備註：</font>
        <font v-if="list.ice">{{list.ice}}</font>
        <font v-if="list.sugar">{{list.sugar}}</font>
        <font v-if="list.egg">{{list.egg}}</font>
        <font v-if="list.hot">{{list.hot}}</font>
      </div>
      <div class="td-in">
        <font v-if="window.width <= 768">單價：</font>
        <font v-if="list.count">{{list.price}}</font>
      </div>
      <div class="td-in">
        <font v-if="window.width <= 768">數量：</font>
        <font v-if="list.count">{{list.count}}</font>
      </div>
      <div class="td-in">
        <font v-if="window.width <= 768">總價：</font>
        <font v-if="list.total">{{list.total}}</font>
      </div>
      <div class="td-in">
        <button @click="deletes(list.serial)" type="button" class="delete-btns">刪除</button>
      </div>
    </div>
    <div class="totals">商品總金額：{{totalPrice}}</div>
    <div class="footer">
      <div class="text"></div>
      <router-link class="new-btns" :to="{name:'index'}">返回菜單區</router-link>
    </div>
  </div>
</template>


<script>
export default {
  name: "app",
  components: {},
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    }
  },
  methods: {
    deletes(num) {
      this.$store.dispatch("DeleteToCart", num);
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      }
    };
  },

  mounted: function() {},
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  }
};
</script>

<style>
</style>
