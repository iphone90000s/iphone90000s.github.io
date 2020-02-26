<template>
    <div class="main-content">
        <topmenu></topmenu>        
        <div class='inner-page'>
          <div class='login_frame'>
            <div class='left'>
              <div class='content'>
                <div class='titles'>如果已是會員，請直接登入。</div>
                <div class='order_email'>
                  <i class="fas fa fa-user"></i>
                  <input type="text" v-model='account' placeholder="請輸入帳號" name="account">     
                  <div class='wrong' v-if="accountError != null">
                    {{ accountError }}
                  </div>             
                </div>                  
                <div class='order_password'>
                  <i class="fa fas fa-unlock-alt"></i>
                  <input type="password" v-model='password' placeholder="請輸入密碼" name="password">
                   <div class='wrong' v-if="passwordError != null">
                    {{ passwordError }}
                  </div>
                </div>               
                <div class='order_login'>
                  <button type='button' @click='checkForm()' class='submit_btn'>登入</button>
                </div>
              </div>
            </div>
            <div class='right'>
              <div class='content'>
                <div class='titles'>New Member</div>
                <div class='s-titles'>還沒有帳號嗎？</div>
                <div class='order_register'>
                  <router-link class='submit_btn' to="/register">註冊</router-link>
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
      account: null,
      password: null,
      accountError: null,
      passwordError: null,
      totalCheck: false
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
      if (this.totalCheck) {
        let formData = new FormData();
        formData.append("account", this.account);
        formData.append("password", this.password);
        this.$axios
          .post("/connect/get/login.php", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            if (response.data.status == "success") {
              this.$cookies.set("status", response.data.token, 60 * 30);
              this.$store.dispatch("AddToken", response.data.token);
              this.$store.dispatch("AddMemberId", response.data.memberId);
              alert("登入成功");
              this.$router.push({ name: "product" });
            } else {
              alert("帳號密碼錯誤");
              this.account = null;
              this.password = null;
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
</style>