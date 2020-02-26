<template>
    <div class="main-content">
        <topmenu></topmenu>        
        <div class='inner-page'>
          <div class='contents block'>
            <div class='left memberleft'>
              <div class='title'>會員專區</div>
              <div class='en_title'>Member</div>
              <ul>
                <li>
                  <router-link :to="{name:'order'}">訂單查詢</router-link>
                </li>
                <li>
                  <router-link :to="{name:'modify'}">會員資料修改</router-link>
                </li>
              </ul>
            </div>
            <div class='right memberright'>
              <div class='title'>訂單查詢</div>
              <div class='shop-cars'>
                <div class='car-content'>
                  <div class="first">
                    <div class="th two">訂購日期</div>
                    <div class="th two">訂單編號</div>
                    <div class="th three">付款方式</div>
                    <div class="th two">處理進度</div>
                    <div class="th two">金額總計(含運費)</div>
                  </div>
                  <div class="second" v-for="(list, index) in orderData" :key="index">
                    <div class="td two">
                      <div class="title" style='font-size:14px'>{{list.create_time}}</div>
                    </div>
                    <div class="td two">
                      <div class="counts" style='font-size:14px'>
                        <router-link :to="{name:'orderlist',params:{id:list.order_id}}">{{list.order_id}}</router-link>
                        
                      </div>
                    </div>
                    <div class="td three">
                      <div class="counts">{{list.pay_method}}</div>
                    </div>
                    <div class="td two">
                      <div class="delete">{{list.status}}</div>
                    </div>
                    <div class="td two">
                      <div class="delete">{{list.total_price}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
      KindData: {}, //分類
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: "",
      token: "",
      orderData: {}
    };
  },

  methods: {},
  computed: {
    // token() {
    //   return this.$store.getters.getToken;
    // }
  },
  created() {
    this.token = this.$store.getters.getToken;
    let formData = new FormData();
    formData.append("token", this.token);
    formData.append("order", "order");
    this.$axios
      .post("/connect/get/checkToken.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status == "error") {
          this.orderData = {};
        } else {
          this.orderData = response.data;
        }
      });
  }
};
</script>