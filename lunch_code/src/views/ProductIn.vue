<template>
    <div class='right productin'>
        <div class='title'>{{title}}</div>
        <!-- <div class='s-title'>{{s_title}}</div> -->
        <!-- <div class='news_upload' v-html='content'>
        </div> -->
        <div class='product_show'>
          <div class='for_left' v-if="image!=''">
            <img :src="baseurl+'/connect/upload/product/'+image">
          </div>         
          <div class='for_right' v-if='getOption.carPick == 0' >
            <div class='in'>
              <div class='prices'>
                <div class='old_price'>NT${{price}}</div>
                <div class='new_price'>
                  <font class='floatText'>NT$</font>
                  <font>{{new_price}}</font>
                </div>             
              </div>                
              <div class='shop-car'>
                <div class='count'>
                  <span class="input-group-btn" style="float: left;width: auto;">
                    <button @click='minusCount()' class="btn btn-default btn1" data-dir="dwn" style="height: 34;">
                      <span class="glyphicon glyphicon-minus"></span>
                    </button>
                  </span>
                  <input name="buy_num" type="text" class="form-control text-center" v-model='count' style="display: inline-block;width:4em;">
                  <span class="input-group-btn" style="display: inline-block;vertical-align: top;">
                    <button  @click='addCount()' class="btn btn-default btn2" data-dir="up" style="height: 34;">
                      <span class="glyphicon glyphicon-plus"></span>
                    </button>
                  </span>
                </div>
                  <div class='add-car'>
                     <input @click='addCar()' type="button" value="加入購物車">
                  </div>
                </div>
            </div>
          </div>         
        </div> 
        <div class='editor' v-html='content'></div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  components: {},

  data() {
    return {
      baseurl: this.GLOBAL.BASE_URL,
      KindData: {}, //分類
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: "",
      price: "",
      new_price: "",
      reserve: "",
      savetystock: "",
      gift: "",
      count: 1,
      ids: "",
      serial: "",
      freight: "",
      full: "",
      freightData: {},
      selected: "",
      blocks: "",
      other1: "",
      other2: "",
      image: ""
    };
  },
  computed: {
    getOption() {
      return this.$store.getters.getOption;
    },
    ...mapGetters({
      products: "allProducts"
    })
  },
  methods: {
    ...mapActions(["actionIncrease", "actionDecrease", "AddToCart"]),
    minusCount() {
      if (this.count > 1) {
        this.count = this.count - 1;
      }
    },
    addCount() {
      this.count = this.count + 1;
    },
    addCar() {
      if (this.$store.getters.getCheckLoing) {
        if (this.count > this.reserve) {
          alert("您購買的數量大於庫存數量，請重新選擇數量");
        } else {
          this.$store.dispatch("AddToCart", [this.Datas, this.count]);
        }
      } else {
        alert("請先登入");
        this.$router.push({ name: "login" });
      }
      // this.$store.dispatch("AddToCart", [this.Datas, this.count]);
      // if (this.$cookies.get("status")) {
      //   this.$router.push({
      //     name: "shopcar",
      //     params: { id: this.ids, count: this.count }
      //   });
      // } else {
      //   alert("請先登入");
      //   this.$router.push({ name: "login" });
      // }
    }
  },
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    this.$axios
      .get("/connect/get/product_in.php?id=" + vm.ids, {})
      .then(response => {
        //找分類
        if (response.data.status == "error") {
          vm.KindData = {};
        } else {
          vm.Datas = response.data[0];
          vm.title = response.data[0].title;
          vm.s_title = response.data[0].s_title;
          vm.content = response.data[0].content;
          vm.price = response.data[0].price;
          vm.new_price = response.data[0].new_price;
          vm.reserve = response.data[0].reserve;
          vm.savetystock = response.data[0].savetystock;
          vm.gift = response.data[0].gift;
          vm.image = response.data[0].image;
          if (response.data[0].other1 != "") {
            vm.other1 = JSON.parse(response.data[0].other1);
          } else {
            vm.other1 = "";
          }
          if (response.data[0].other2 != "") {
            vm.other2 = JSON.parse(response.data[0].other2);
          } else {
            vm.other2 = "";
          }
        }
      });
  }
};
</script>