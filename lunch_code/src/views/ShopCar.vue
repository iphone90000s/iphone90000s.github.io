<template>
  <div class="main-content">
    <topmenu></topmenu>
    <div class="shop-cars">
      <div class="steps">
        <img src="@/assets/img/step1.png" />
      </div>
      <div class="car-content">
        <div class="first">
          <div class="th one">商品名稱</div>
          <div class="th two">贈品&nbsp;</div>
          <div class="th four">購買數量</div>
          <div class="th five">購買單價</div>
          <div class="th six">刪除</div>
        </div>
        <div class="second" v-for="(list, index) in products" :key="index">
          <div class="td one">
            <div class="content-left" style="background:transparent">
              <!-- <img src="up/product/b5bca1c7fba3ae3d434dff2f615bb52a.jpg"> -->
            </div>
            <div class="content-right">
              <div class="mb">商品名稱：&nbsp;</div>
              <div class="text">{{list.title}}</div>
            </div>
          </div>
          <div class="td two">
            <div class="mb">贈品：&nbsp;</div>
            <div class="text"></div>
          </div>
          <div class="td four">
            <div class="mb">購買數量：&nbsp;</div>
            <div class="text">{{list.buycount}}</div>
          </div>
          <div class="td five">
            <span class="mb">購買單價：&nbsp;</span>
            <div class="text">NT${{list.new_price}}</div>
          </div>
          <div class="td six">
            <div @click="deletes(list.serial)" class="delete">移除</div>
          </div>
        </div>
        <div class="total">
          <div class="one">
            <div class="prices">
              <font class="s1">商品金額</font>
              <font class="s2">NT${{prices}}</font>
            </div>
            <div class="fare">
              <font class="s1">運費小計</font>
              <font class="s2">NT${{fares}}</font>
            </div>
          </div>
          <div class="two">
            <div class="total_prices">
              <font class="s1">總計</font>
              <font class="s2">NT${{totalCount}}</font>
            </div>
          </div>
        </div>
        <div class="clear"></div>
        <div class="btn_frame">
          <div class="prev">
            <router-link :to="{name:'product'}">繼續購物</router-link>
          </div>
          <div class="next">
            <div @click="gotoNext()">下一步</div>
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Topmenu from "../components/topmenu.vue";
import Footer from "../components/footer.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  components: {
    Topmenu,
    Footer
  },
  data() {
    return {
      Datas: null,
      freight: "",
      full: "",
      freightData: {}
    };
  },
  computed: {
    ...mapGetters({
      products: "allProducts",
      prices: "prices",
      fares: "freights",
      totalCount: "totalCount"
    })
  },
  methods: {
    ...mapActions(["AddToCart"]),
    deletes(num) {
      this.$store.dispatch("DeleteToCart", num);
    },
    gotoNext() {
      alert("此站為展示站，購物車流程僅至此，暫時關閉送出訂單流程");
      // this.$router.push({ name: "shopcarnext" });
    }
  },
  mounted: function() {},
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;

    this.$store.dispatch("checkLoging", this.$cookies.get("status"));
    if (!this.$store.getters.getCheckLoing) {
      alert("請先登入");
      this.$router.push({ name: "login" });
    }
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