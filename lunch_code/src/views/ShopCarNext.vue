<template>
    <div class="main-content">
        <topmenu></topmenu>    
        <div class='shop-cars'> 
          <div class='steps'>
            <img src='@/assets/img/step2.png'>
          </div>
          <div class="this_shop">
            <div class="this_price">
              <div class="content">
                <font>本次消費總計</font>
                <font class="price">{{totalCount}}</font>
              </div>
            </div>
            <div :class="{active: show}" class="show_list" @click='showCar()'>
              總計
              <font>{{products.length}}</font>件商品
            </div>
            <transition name="fade">
              <div class='car-content' v-if='show'>
                <div class="first">
                  <div class="th one">商品名稱</div>
                  <div class="th two">贈品&nbsp;</div>
                  <div class="th four">購買數量</div>
                  <div class="th five">購買單價</div>
                </div>
                <div class="second" v-for="(list, index) in products" :key="index">
                  <div class="td one">
                    <!-- <div class="content-left" style="background:transparent"></div> -->
                    <div class="content-right">
                      <div class="mb">商品名稱：&nbsp;</div>
                      <div class="text">{{list.title}}</div>
                    </div>
                  </div>
                  <div class="td two">
                    <div class="mb">贈品&nbsp;</div>
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
                </div>
              </div>
            </transition>
          </div>        
        </div>   
        <div class='pay_step'>
          <div class="steps">
            <img src="@/assets/img/pay_step1.png">
          </div>
          <div class='order-frame'>
            <div class='box'>
              <label><font class="require">*</font>購買人姓名</label>
              <div class='text'>
                <input type='text' autocomplete="off" v-model='member.buy_name'>
              </div>
              <div class='require' v-if='check.buy_nameCheck'>{{check.errorText}}</div>
            </div>
            <div class='box'>
              <label><font class="require">*</font>購買人EMAIL</label>
              <div class='text'>
                <input type='text' autocomplete="off" v-model='member.buy_email'>
              </div>
              <div class='require' v-if='check.buy_emailCheck'>{{check.errorText}}</div>
            </div>
            <div class='box'>
              <label><font class="require">*</font>購買人手機</label>
              <div class='text'>
                <input type='text' autocomplete="off" v-model='member.buy_phone'>                
              </div>
              <div class='require' v-if='check.buy_phoneCheck'>{{check.errorText}}</div>
            </div>
            <div class='box'>
              <label><font class="require">*</font>收貨人資訊</label>
              <div class='text'>
                <input type='checkbox' v-model='same'  @change='sameFunction(same)'>
                  同購買人資訊
              </div>
            </div>
            <div class='box'>
              <label><font class="require">*</font>收貨人姓名</label>
              <div class='text'>
                <input type='text' autocomplete="off" v-model='member.get_name'>                
              </div>
              <div class='require' v-if='check.get_nameCheck'>{{check.errorText}}</div>
            </div>
            <div class='box'>
              <label><font class="require">*</font>收貨人手機</label>
              <div class='text'>
                <input type='text' autocomplete="off" v-model='member.get_phone'>                
              </div>
              <div class='require' v-if='check.get_phoneCheck'>{{check.errorText}}</div>
            </div>
            <div class='box'>
              <label><font class="require">*</font>郵地區號</label>
              <div class='text'>                
                <input type='text' autocomplete="off" v-model='member.add_num'>             
              </div>
              <div class='require' v-if='check.add_numCheck'>{{check.errorText}}</div>
            </div>
            <div class='box'>
              <label><font class="require">*</font>收貨人地址</label>
              <div class='text'>                
                <input type='text' autocomplete="off" v-model='member.get_addr'>             
              </div>
              <div class='require' v-if='check.get_addrCheck'>{{check.errorText}}</div>
            </div>            
            <div class='box'>
              <label><font class="require">*</font>可收貨時段</label>
              <div class='text'>
                <input type='radio' v-model='member.get_time' value='am'>上午9:00~13:00
                <input type='radio' v-model='member.get_time'  value='pm'>下午14:00~18:00         
              </div>
              <div class='require' v-if='check.get_timeCheck'>{{check.errorText}}</div>
            </div>
            <div class='box'>
              <label><font class="require">*</font>發票類型</label>
              <div class='text'>
                <input type='radio' @change='invoice(member.invoice)' v-model='member.invoice' value='two'>二聯式電子發票
                <input type='radio' @change='invoice(member.invoice)' v-model='member.invoice' value='three'>三聯式發票            
              </div>
              <div class='require' v-if='check.invoiceCheck'>{{check.errorText}}</div>
            </div>
            <div class='box' v-if='companyShow'>
              <label><font class="require">*</font>公司名稱</label>
              <div class='text'>                
                <input type='text' autocomplete="off" v-model='member.company'>             
              </div>
              <div class='require' v-if='check.companyCheck'>{{check.errorText}}</div>
            </div>
            <div class='box'  v-if='companyShow'>
              <label><font class="require">*</font>統一編號</label>
              <div class='text'>                
                <input type='text' autocomplete="off" v-model='member.companynum'>             
              </div>
              <div class='require' v-if='check.companynumCheck'>{{check.errorText}}</div>
            </div>
            <div class='box'>
              <label>備註</label>
              <div class='text'>
                <textarea v-model="member.other"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class='pay_step'>
          <div class="steps">
            <img src="@/assets/img/pay_step2.png">
          </div>
          <div class='order-frame'>
            <div class='radio_options' v-for="(list, index) in payData" :key='index'>
              <input :id='list.serial' type='radio' name='payMethod' :value='list.title' v-model='pay_method'>
              <label :for="list.serial">{{list.title}}</label>
              <div class='text'>{{list.content}}</div>
            </div>
            <div class='require' v-if='check.pay_methodCheck'>{{check.errorText}}</div>
          </div>
        </div>
        <div class="shopcarNext-btn">
          <input @click='gotoNext()' type="button" value="確認送出">
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
      show: false,
      member: {
        buy_name: "",
        buy_email: "",
        buy_phone: "",
        get_name: "",
        get_phone: "",
        get_addr: "",
        add_num: "",
        get_time: "",
        invoice: "",
        company: "",
        companynum: "",
        other: ""
      },
      same: false,
      companyShow: false,
      pay_method: "",
      payData: {
        title: "",
        content: ""
      },
      check: {
        buy_nameCheck: false,
        buy_emailCheck: false,
        buy_phoneCheck: false,
        get_nameCheck: false,
        get_phoneCheck: false,
        add_numCheck: false,
        get_addrCheck: false,
        get_timeCheck: false,
        invoiceCheck: false,
        companyCheck: false,
        companynumCheck: false,
        pay_methodCheck: false,
        errorText: "此欄位不得為空",
        allcheck: false
      }
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
  methods: {
    invoice(num) {
      if (num == "three") {
        this.companyShow = true;
      } else {
        this.companyShow = false;
      }
    },
    sameFunction(same) {
      if (same) {
        this.member.get_name = this.member.buy_name;
        this.member.get_phone = this.member.buy_phone;
      }
    },
    gotoNext() {
      if (this.member.buy_name == "") {
        this.check.buy_nameCheck = true;
        this.check.allcheck = false;
      } else {
        this.check.buy_nameCheck = false;
        this.check.allcheck = true;
      }
      if (this.member.buy_email == "") {
        this.check.buy_emailCheck = true;
        this.check.allcheck = false;
      } else {
        this.check.buy_emailCheck = false;
        this.check.allcheck = true;
      }
      if (this.member.buy_phone == "") {
        this.check.buy_phoneCheck = true;
        this.check.allcheck = false;
      } else {
        this.check.buy_phoneCheck = false;
        this.check.allcheck = true;
      }
      if (this.member.get_name == "") {
        this.check.get_nameCheck = true;
        this.check.allcheck = false;
      } else {
        this.check.get_nameCheck = false;
        this.check.allcheck = true;
      }
      if (this.member.get_phone == "") {
        this.check.get_phoneCheck = true;
        this.check.allcheck = false;
      } else {
        this.check.get_phoneCheck = false;
        this.check.allcheck = true;
      }
      if (this.member.add_num == "") {
        this.check.add_numCheck = true;
        this.check.allcheck = false;
      } else {
        this.check.add_numCheck = false;
        this.check.allcheck = true;
      }
      if (this.member.invoice == "") {
        this.check.invoiceCheck = true;
        this.check.allcheck = false;
      } else {
        this.check.invoiceCheck = false;
        this.check.allcheck = true;
      }

      if (this.member.get_time == "") {
        this.check.get_timeCheck = true;
        this.check.allcheck = false;
      } else {
        this.check.get_timeCheck = false;
        this.check.allcheck = true;
      }
      if (this.member.invoice == "three") {
        if (this.member.company == "") {
          this.check.companyCheck = true;
          this.check.allcheck = false;
        } else {
          this.check.companyCheck = false;
          this.check.allcheck = true;
        }
        if (this.member.companynum == "") {
          this.check.companynumCheck = true;
          this.check.allcheck = false;
        } else {
          this.check.companynumCheck = false;
          this.check.allcheck = true;
        }
      } else {
        this.check.companyCheck = false;
        this.check.companynumCheck = false;
        this.check.allcheck = true;
      }

      if (this.pay_method == "") {
        this.check.pay_methodCheck = true;
        this.check.allcheck = false;
      } else {
        this.check.pay_methodCheck = false;
        this.check.allcheck = true;
      }
      if (this.check.allcheck) {
        this.$axios
          .post("/connect/save/save-order.php", {
            member: this.member,
            pay_method: this.pay_method,
            product: this.$store.getters.getProducts,
            member_id: this.$store.getters.getMemberId,
            price: this.$store.getters.prices,
            freight: this.$store.getters.freights,
            totalCount: this.$store.getters.totalCount
          })
          .then(response => {
            if (response.data.status == "error") {
              alert("error");
            } else {
              this.$store.dispatch("clearProduct");
              this.$router.push({
                name: "shopcarfinal",
                params: {
                  order_num: response.data.order_num,
                  member_name: response.data.member_name
                }
              });
            }
          });
      }
    },
    showCar() {
      this.show = !this.show;
    },
    deletes(num) {
      this.$store.dispatch("DeleteToCart", num);
    }
  },
  mounted: function() {},
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    this.$axios.get("/connect/get/pay_in.php", {}).then(response => {
      if (response.data.status == "error") {
        vm.payData = {};
      } else {
        vm.payData = response.data;
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