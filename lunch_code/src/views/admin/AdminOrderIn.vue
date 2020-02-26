<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/product"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->                 
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 訂單管理
                    </div>
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
                <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 訂單產品 <button type='button' v-print="'#print'">列印</button>
                  </div>
                 
                  <div class="card-body">
                    <div class='dataTables_wrapper dt-bootstrap4 no-footer'>
                        <div id='print' class='row'>
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
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 處理進度
                    </div>
                    <div class="card-body">
                        <div class='box'>
                            <label class='h6'>處理進度</label>
                            <input type='text' v-model='status'>
                        </div>
                        <div class='box'>
                            <span class='require'>ex. 出貨中，已出貨</span>
                        </div>
                        <div class='box'>
                            <label class='h6'>出貨時間</label>
                            <input type='date' v-model='ex_date'>
                        </div>
                    </div>
                </div>
                <div class="btn_style">
                    <button @click='checkForm()' class="btn btn-block btn-outline-dark" type="button">送出</button>
                </div>
            </form>
        </div>
      </div>
    </main>
</template>

<script>
import Bread from "../../components/bread.vue";
export default {
  name: "app",
  components: {
    Bread
  },
  data() {
    return {
      orderData: {},
      productData: {},
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
      ids: "",
      name: "訂單列表",
      member_name: "",
      member_account: "",
      member_phone: "",
      member_email: "",
      ex_date: ""
    };
  },
  methods: {
    checkForm() {
      let formData = new FormData();
      formData.append("id", this.ids);
      formData.append("status", this.status);
      formData.append("ex_date", this.ex_date);
      this.$axios
        .post("/connect/save/save-order.php", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status == "success") {
            alert("資料送出成功");
            this.$router.go(0);
          }
        });
    }
  },
  mounted: function() {},
  created() {
    const vm = this;
    this.ids = this.$route.params.id;
    this.$axios.get("/connect/get/order.php?id=" + this.ids, {}).then(response => {
      if (response.data.status != "error") {
        vm.productData = response.data[0].products;
        vm.member_id = response.data[0].member_id;
        vm.order_id = response.data[0].order_id;
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
        vm.create_time = response.data[0].create_time;
        vm.status = response.data[0].status;
        vm.product_price = response.data[0].product_price;
        vm.product_fare = response.data[0].product_fare;
        vm.total_price = response.data[0].total_price;
        vm.status = response.data[0].status;
        vm.ex_date = response.data[0].ex_date;
        // vm.ex_date = vm.ex_date.formatDate("yyyy-MM-dd");
        vm.productData = JSON.parse(vm.productData);
        this.$axios
          .get("/connect/get/member.php?select=1&id=" + this.member_id, {})
          .then(memberResponse => {
            if (memberResponse.data.status != "error") {
              vm.member_name = memberResponse.data.name;
              vm.member_account = memberResponse.data.account;
              vm.member_phone = memberResponse.data.phone;
              vm.member_email = memberResponse.data.email;
            }
          });
      }
    });
  }
};
</script>

<style lang='scss'>
</style>