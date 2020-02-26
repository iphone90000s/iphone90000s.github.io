<template>
    <div class="main-content">
        <topmenu></topmenu>    
        <div class='shop-cars'> 
          <div class='steps'>
            <img src='@/assets/img/step3.png'>
          </div>
          <div class="this_shop">
            <div class='serialnum'>
              親愛的<font>{{member_name}}</font>您好，感謝您的訂購，您的訂單編號為{{order_num}}
            </div>
            <div class='car-content'>
              <div class="first">
                <div class="th one">商品名稱</div>
                <div class="th two">贈品&nbsp;</div>
                <div class="th four">購買數量</div>
                <div class="th five">購買單價</div>
              </div>
              <div class="second" v-for="(list, index) in products" :key="index">
                <div class="td one">
                  <div class="content-left" style="background:transparent">
                      <!-- <img src="up/product/b5bca1c7fba3ae3d434dff2f615bb52a.jpg"> -->                                  
                  </div>
                  <div class="content-right">
                    <div class="title">{{list.title}}</div>
                  </div>
                </div>
                <div class="td two">
                  <div class="mb">贈品&nbsp;</div>
                  <div class="counts"></div>
                </div>
                <div class="td four">
                  <div class="mb">購買數量：&nbsp;</div>
                  <div class="counts">{{list.buycount}}</div>
                </div>
                <div class="td five">
                  <span class="mb">購買單價：&nbsp;</span>
                  <span>NT${{list.new_price}}</span>
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
                    <font class="s2">NT${{freight}}</font>
                  </div>
                </div>
                <div class="two">
                  <div class="total_prices">
                    <font class="s1">總計</font>
                    <font class="s2">NT${{totalCount}}</font>
                  </div>
                </div>
              </div>
            </div>
          </div>        
        </div>   
        <div class='pay_step'>
          <div class="steps">
            <img src="@/assets/img/pay_step1.png">
          </div>
          <div class='order-frame'>
            <div class='box'>
              <label>購買人姓名</label>
              <div class='text'>{{buy_name}}</div>
            </div>
            <div class='box'>
              <label>購買人EMAIL</label>
              <div class='text'>{{buy_email}}</div>
            </div>
            <div class='box'>
              <label>購買人手機</label>
              <div class='text'>{{buy_phone}}</div>
            </div>
            <div class='box'>
              <label>收貨人姓名</label>
              <div class='text'>{{get_name}}</div>
            </div>
            <div class='box'>
              <label>收貨人手機</label>
              <div class='text'>{{get_phone}}</div>
            </div>
            <div class='box'>
              <label>收貨人地址</label>
              <div class='text'>{{add_num}} {{addr}}</div>
            </div>
            <div class='box'>
              <label>可收貨時段</label>
              <div class='text'>{{get_time}}</div>
            </div>
            <div class='box'>
              <label>發票類型</label>
              <div class='text'>{{invoice}}</div>
            </div>
            <div class='box'>
              <label>備註</label>
              <div class='text'>{{other}}</div>
            </div>
            <div class='box' v-if='company'>
              <label>公司名稱</label>
              <div class='text'>{{company}}</div>
            </div>
            <div class='box' v-if='company_num'>
              <label>統一編號</label>
              <div class='text'>{{company_num}}</div>
            </div>
            <div class='box'>
              <label>付款方式</label>
              <div class='text'>{{pay_method}}</div>
            </div>
          </div>
        </div>
        <Footer></Footer>    
    </div>
</template>

<script>
import Topmenu from "../components/topmenu.vue";
import Footer from "../components/footer.vue";
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: {
    Topmenu,
    Footer
  },
  data() {
    return {
      Datas: null,
      ids: "",
      member_name: "",
      order_num: "",
      orderData: {},
      buy_name: "",
      buy_email: "",
      buy_phone: "",
      get_name: "",
      get_phone: "",
      add_num: "",
      addr: "",
      get_time: "",
      invoice: "",
      company: "",
      company_num: "",
      other: "",
      pay_method: ""
    };
  },
  computed: {
    ...mapGetters({
      products: "allProducts",
      prices: "prices",
      freight: "freights",
      totalCount: "totalCount"
    })
  },
  methods: {},
  mounted: function() {},
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    vm.member_name = this.$route.params.member_name;
    vm.order_num = this.$route.params.order_num;
    this.$axios
      .get("/connect/get/order.php?orderid=" + vm.order_num, {})
      .then(response => {
        if (response.data.status == "error") {
          vm.orderData = {};
        } else {
          vm.orderData = response.data;
          vm.buy_name = response.data[0].buy_name;
          vm.buy_email = response.data[0].buy_email;
          vm.buy_phone = response.data[0].buy_phone;
          vm.get_name = response.data[0].get_name;
          vm.get_phone = response.data[0].get_phone;
          vm.add_num = response.data[0].add_num;
          vm.addr = response.data[0].addr;
          vm.get_time = response.data[0].get_time;
          vm.invoice = response.data[0].invoice;
          vm.company = response.data[0].company;
          vm.company_num = response.data[0].company_num;
          vm.other = response.data[0].other;
          vm.pay_method = response.data[0].pay_method;
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