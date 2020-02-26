<template>
    <div class="main-content">
        <topmenu></topmenu>        
        <div class='inner-page'>
          <div class='register_frame'>
            <div class='titles'>New Member</div>
            <div class='s-titles'>請填寫以下資料加入會員</div>
            <form autocomplete="off">
              <div class='register_in'>
                <div class='order_list'>
                  <label>帳號</label>
                  <i class="fas fa fa-user"></i>
                  <input name="account" v-model="account" type="text" placeholder="請輸入英文數字做為您的帳號">
                  <div class='wrong' v-if="accountError != null">
                    {{ accountError }}
                  </div>    
                </div>
                <div class='order_list'>
                  <label>密碼</label>
                  <i class="fa fas fa-unlock-alt"></i>
                  <input name="password" v-model='password' type="password" placeholder="密碼長度為8-16碼">
                  <div class='wrong' v-if="passwordError != null">
                    {{ passwordError }}
                  </div>    
                </div>
                <div class='order_list'>
                  <label>確認密碼</label>
                  <i class="fas fa fa-lock"></i>
                  <input name="password" v-model='check_password' type="password" placeholder="請再輸入一次密碼">
                  <div class='wrong' v-if="check_passwordError != null">
                    {{ check_passwordError }}
                  </div>    
                </div>
                <div class='order_list'>
                  <label>會員姓名</label>
                  <i class="far fa fa-id-card"></i>
                  <input name="name" v-model='name' type="text" placeholder="請輸入真實姓名">
                  <div class='wrong' v-if="nameError != null">
                    {{ nameError }}
                  </div>    
                </div>
                <div class='order_list'>
                  <label>手機號碼</label>
                  <i class="fa fa-phone"></i>
                  <input name="phone" v-model='phone' type="text" placeholder="請輸入手機號碼">
                  <div class='wrong' v-if="phoneError != null">
                    {{ phoneError }}
                  </div>    
                </div>
                <div class='order_list'>
                  <label>Email</label>
                  <i class="far fa fa-envelope"></i>
                  <input name="email" v-model='email' type="email" placeholder="請輸入Email">
                  <div class='wrong' v-if="emailError != null">
                    {{ emailError }}
                  </div>    
                </div>
                <!-- <div class="order_list">
                  <div class="order_captcha">
                    <div style="display:table;margin:0 auto;" class="g-recaptcha" data-sitekey="6Lduz6MUAAAAAJ3kI1niLI9ruQkRpVMIM_dFmEqp"></div>
                  </div>
                </div> -->
                <div class="order_list">
                  <div class="order_check">
                    <label>勾選同意事項</label>
                    <input type="checkbox" v-model='check' id="checkbox" name="checkbox">
                    <font>我已閱讀並同意
                      <router-link target='_blank' to="/personal">會員條款</router-link>及
                      <router-link target='_blank' to="/privacy">隱私權政策</router-link>
                    </font>
                  </div>
                  <div class='wrong' v-if="checkError != null">
                    {{ checkError }}
                  </div>    
                </div>
                <div class="order_list">
                  <button type='button' @click='checkForm' class='submit_btn'>確認送出</button>
                </div>
              </div>
            </form>
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
      account: null,
      password: null,
      check_password: null,
      name: null,
      phone: null,
      email: null,
      check: null,
      accountError: null,
      passwordError: null,
      check_passwordError: null,
      nameError: null,
      phoneError: null,
      emailError: null,
      checkError: null,
      totalCheck: true
    };
  },
  methods: {
    checkForm() {
      if (!this.account) {
        this.accountError = "請輸入帳號";
        this.totalCheck = false;
      } else {
        this.accountError = null;
        this.totalCheck = true;
      }
      if (!this.password) {
        this.passwordError = "請輸入密碼";
        this.totalCheck = false;
      } else {
        this.passwordError = null;
        this.totalCheck = true;
      }
      if (!this.check_password) {
        this.check_passwordError = "請再次輸入密碼";
      } else {
        if (this.check_password != this.password) {
          this.check_passwordError = "與密碼不一致";
          this.totalCheck = false;
        } else {
          this.check_passwordError = null;
          this.totalCheck = true;
        }
      }
      if (!this.name) {
        this.nameError = "請輸入姓名";
        this.totalCheck = false;
      } else {
        this.nameError = null;
        this.totalCheck = true;
      }
      if (!this.phone) {
        this.phoneError = "請輸入電話";
        this.totalCheck = false;
      } else {
        this.phoneError = null;
        this.totalCheck = true;
      }
      if (!this.email) {
        this.emailError = "請輸入Email";
        this.totalCheck = false;
      } else {
        const isMail = /\w+[@]{1}\w+[.]\w+/;
        if (!isMail.test(this.email)) {
          this.emailError = "Email格式錯誤";
          this.totalCheck = false;
        } else {
          this.emailError = null;
          this.totalCheck = true;
        }
      }

      if (!this.check) {
        this.checkError = "請勾選同意事項";
        this.totalCheck = false;
      } else {
        this.checkError = null;
        this.totalCheck = true;
      }
      if (this.totalCheck) {
        let formData = new FormData();
        formData.append("account", this.account);
        formData.append("password", this.password);
        formData.append("name", this.name);
        formData.append("phone", this.phone);
        formData.append("email", this.email);
        this.$axios
          .post("/connect/save/save-register.php", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            if (response.data.status == "success") {
              alert("註冊成功");
              this.$router.push({ name: "login" });
            } else {
              alert("註冊失敗");
              this.$router.push({ name: "login" });
            }
          });
      }
    }
  },
  mounted: function() {}
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