<template>
  <div>
    <div class="blackFrame" v-if="show" @click="closeFrameSpace($event)">
      <div class="inner">
        <div class="main">
          <div class="title">{{order.name}}</div>
          <div v-if="order.choose">
            <div class="named">
              是否加蛋
              <font v-if="error.egg">{{error.egg}}</font>
            </div>
            <div class="option-side" v-for="(list, index) in order.choose.egg" :key="index">
              <div
                @click="addEgg(list)"
                :class="{active:list.name == egg}"
                class="option"
              >{{list.name}}</div>
            </div>
          </div>
          <div v-if="order.choose">
            <div class="named">
              是否加辣
              <font v-if="error.hot">{{error.hot}}</font>
            </div>
            <div class="option-side" v-for="(list, index) in order.choose.hot" :key="index">
              <div
                @click="addHot(list)"
                :class="{active:list.name == hot}"
                class="option"
              >{{list.name}}</div>
            </div>
          </div>
          <div v-if="order.size">
            <div class="named">
              尺寸選擇
              <font v-if="error.size">{{error.size}}</font>
            </div>
            <div class="option-side" v-for="(list, index) in order.size" :key="index">
              <div
                @click="addActiveForSize(list)"
                :class="{active:list.name == drinkSize}"
                class="option"
              >{{list.name}}</div>
            </div>
          </div>
          <div v-if="order.size">
            <div class="named">
              冰塊選擇
              <font v-if="error.ice">{{error.ice}}</font>
            </div>
            <div class="option-side" v-for="(list, index) in order.ice" :key="index">
              <div
                @click="addActiveForIce(list)"
                :class="{active:list == drinkIce}"
                class="option"
              >{{list}}</div>
            </div>
          </div>
          <div v-if="order.size">
            <div class="named">
              甜度選擇
              <font v-if="error.sugar">{{error.sugar}}</font>
            </div>
            <div class="option-side" v-for="(list, index) in order.sugar" :key="index">
              <div
                @click="addActiveForSugar(list)"
                :class="{active:list == drinkSugar}"
                class="option"
              >{{list}}</div>
            </div>
          </div>
        </div>
        <div class="cart">
          <div class="count">
            <span class="input-group-btn" style="display: inline-block;vertical-align: top;">
              <button @click="minusCount()" class="btn btn-default btn1" data-dir="dwn">
                <span class="glyphicon glyphicon-minus"></span>
              </button>
            </span>
            <input type="text" class="form-control text-center" v-model="count" />
            <span class="input-group-btn">
              <button @click="addCount()" class="btn btn-default btn2" data-dir="up">
                <span class="glyphicon glyphicon-plus"></span>
              </button>
            </span>
          </div>
          <div class="single_price" v-show="order.price">
            <span>單價：</span>
            <span v-text="singlePrice"></span>
          </div>
          <div class="single_price" v-show="drinkPrice">
            <span>單價：</span>
            <span v-text="singlePrice"></span>
          </div>
          <div class="total_price" v-if="total">
            <span>總價：</span>
            <span>{{total}}</span>
          </div>
          <div class="btn-frame">
            <button
              class="btns addCart btn-double"
              @click="addToCart(order,total,singlePrice)"
              type="button"
            >加入購物車</button>
            <button @click="closeFrame()" class="btns btn-double" type="button">關閉視窗</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  computed: {
    total() {
      if (this.drinkPrice) {
        return this.count * this.drinkPrice;
      } else {
        return (
          this.count * (this.$store.getters.getOrder.price + this.eggPrice)
        );
      }
    },
    singlePrice() {
      if (this.drinkPrice) {
        return this.drinkPrice;
      } else {
        return this.$store.getters.getOrder.price + this.eggPrice;
      }
    },
    show() {
      return this.$store.getters.getFrameShow;
    },
    order() {
      return this.$store.getters.getOrder;
    },

    key() {
      return this.$route.path + Math.random();
    }
  },
  methods: {
    addEgg(a) {
      this.eggPrice = a.price;
      this.egg = a.name;
    },
    addHot(a) {
      this.hot = a.name;
    },

    cartMethod(order, total, singlePrice) {
      this.$store.dispatch("setCart", [
        order.name,
        this.drinkIce,
        this.drinkSugar,
        total,
        this.count,
        singlePrice,
        this.drinkSize,
        this.egg,
        this.hot
      ]);
      alert("加入購物車成功");
      this.closeFrame();
    },
    addToCart(order, total, singlePrice) {
      if (order.kind == "rice") {
        if (!this.egg) {
          this.error.egg = "請選擇是否加蛋";
        } else {
          this.error.egg = false;
        }
        if (!this.hot) {
          this.error.hot = "請選擇是否加辣";
        } else {
          this.error.hot = false;
        }
        if (this.hot && this.egg) {
          this.cartMethod(order, total, singlePrice);
        }
      } else {
        if (!this.drinkSize) {
          this.error.size = "請選擇您的尺寸";
        } else {
          this.error.size = false;
        }
        if (!this.drinkIce) {
          this.error.ice = "請選擇您的冰塊";
        } else {
          this.error.ice = false;
        }
        if (!this.drinkSugar) {
          this.error.sugar = "請選擇您的甜度";
        } else {
          this.error.sugar = false;
        }
        if (this.drinkSize && this.drinkIce && this.drinkSugar) {
          this.cartMethod(order, total, singlePrice);
        }
      }
    },
    addActiveForIce(index) {
      this.drinkIce = index;
    },
    addActiveForSugar(index) {
      this.drinkSugar = index;
    },
    addActiveForSize(index) {
      this.drinkSize = index.name;
      this.drinkPrice = index.price;
    },
    minusCount() {
      if (this.count > 1) {
        this.count = this.count - 1;
      }
    },
    addCount() {
      this.count = this.count + 1;
    },
    closeFrame: function() {
      this.$store.dispatch("setFrameShow", false);
      this.$store.dispatch("setOrder", "");
      this.drinkIce = false;
      this.drinkSugar = false;
      this.drinkSize = false;
      this.drinkPrice = false;
      this.egg = false;
      this.hot = false;
      this.count = 1;
    },
    closeFrameSpace: function(event) {
      if (event.target.className == "blackFrame") {
        this.$store.dispatch("setFrameShow", false);
        this.$store.dispatch("setOrder", "");
        this.drinkIce = false;
        this.drinkSugar = false;
        this.drinkSize = false;
        this.drinkPrice = false;
        this.egg = false;
        this.hot = false;
        this.count = 1;
      }
    }
  },
  data() {
    return {
      count: 1,
      drinkSize: false,
      drinkPrice: false,
      drinkIce: false,
      drinkSugar: false,
      egg: false,
      hot: false,
      eggPrice: false,
      error: {
        ice: false,
        sugar: false,
        size: false,
        egg: false,
        hot: false
      }
    };
  },

  mounted: function() {},
  created() {}
};
</script>

<style>
</style>
