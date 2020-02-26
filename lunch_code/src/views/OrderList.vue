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
              <div class='title'>訂單查詢 - {{num}}</div>
              <div class="card-body">
                <div class='dataTables_wrapper dt-bootstrap4 no-footer'>
                    <div class='row'>
                        <div class='col-sm-12'>
                            <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                <tr role='row'>
                                    <th class="sorting" style="width: 150px;">產品名稱</th>
                                    <th class="sorting" style="width: 150px;">單價</th>
                                    <th class="sorting" style="width: 150px;">數量</th>
                                    <th class="sorting" style="width: 150px;">總價</th>
                                </tr>
                                <tr v-for="(list, index) in productData" :key="index">
                                    <td>{{list.title}}</td>
                                    <td>{{list.new_price}}</td>
                                    <td>{{list.buycount}}</td>
                                    <td>{{list.new_price * list.buycount}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
              </div>
              <div class='shop-cars'>
                <div class="card-body">
                    <div class='box'>
                        <label class='h6'>訂單編號</label>
                        <span>{{order_id}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>會員帳號</label>
                        <span>{{member_account}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>會員名稱</label>
                        <span>{{member_name}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>會員電話</label>
                        <span>{{member_phone}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>收件人</label>
                        <span>{{get_name}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>收件人電話</label>
                        <span>{{get_phone}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>收件人地址</label>
                        <span>{{add_num}}{{addr}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>收件人備註</label>
                        <span>{{other}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>付款方式</label>
                        <span>{{pay_method}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>運費</label>
                        <span>{{product_fare}}</span>
                    </div>
                    <div class='box'>
                        <label class='h6'>商品總金額</label>
                        <span>{{product_price}}</span>
                    </div>     
                    <div class='box'>
                        <label class='h6'>需匯入總金額</label>
                        <span>{{total_price}}</span>
                    </div>    
                    <div class='box'>
                        <label class='h6'>訂單日期</label>
                        <span>{{create_time}}</span>
                    </div> 
                    <div class='box'>
                        <label class='h6'>訂單狀態</label>
                        <span></span>
                    </div>        
                    <div class='box'>
                        <label class='h6'>可收貨時段</label>
                        <span>{{get_time}}</span>
                    </div> 
                    <div class='box'>
                        <label class='h6'>發票類型</label>
                        <span>{{invoice}}</span>
                    </div> 
                    <div class='box'>
                        <label class='h6'>公司名稱</label>
                        <span>{{company}}</span>
                    </div>   
                    <div class='box'>
                        <label class='h6'>統一編號</label>
                        <span>{{company_num}}</span>
                    </div>    
                    <div class='box'>
                        <label class='h6'>出貨日期</label>
                        <span>{{ex_date}}</span>
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
      orderData: {},
      num: "",
      member_id: "",
      order_id: "",
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
      pay_method: "",
      create_time: "",
      status: "",
      product_price: "",
      product_fare: "",
      total_price: "",
      ex_date: ""
    };
  },

  methods: {},
  computed: {
    // token() {
    //   return this.$store.getters.getToken;
    // }
  },
  created() {
    const vm = this;
    this.num = this.$route.params.id;
    let formData = new FormData();
    formData.append("id", this.num);
    this.$axios
      .post("/connect/get/order.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status == "error") {
          this.orderData = {};
        } else {
          vm.productData = response.data.products;
          vm.member_id = response.data.member_id;
          vm.order_id = response.data.order_id;
          vm.buy_name = response.data.buy_name;
          vm.buy_email = response.data.buy_email;
          vm.buy_phone = response.data.buy_phone;
          vm.get_name = response.data.get_name;
          vm.get_phone = response.data.get_phone;
          vm.add_num = response.data.add_num;
          vm.addr = response.data.addr;
          vm.get_time = response.data.get_time;
          vm.invoice = response.data.invoice;
          vm.company = response.data.company;
          vm.company_num = response.data.company_num;
          vm.other = response.data.other;
          vm.pay_method = response.data.pay_method;
          vm.create_time = response.data.create_time;
          vm.status = response.data.status;
          vm.product_price = response.data.product_price;
          vm.product_fare = response.data.product_fare;
          vm.total_price = response.data.total_price;
          vm.status = response.data.status;
          vm.ex_date = response.data.ex_date;
          vm.productData = JSON.parse(vm.productData);
        }
      });
  }
};
</script>