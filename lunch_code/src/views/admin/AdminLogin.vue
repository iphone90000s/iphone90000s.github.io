<template> 
  <div class='admins'>
    <div class='outside'>
      <form class="form-signin" autocomplete="off" method='post'>
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">Account</label>
          <input v-model='account' type="text" name='account' class="form-control" placeholder="Account">
          <div class='wrong' v-if="accountError != null">
            {{ accountError }}
          </div>
          <label for="inputPassword" class="sr-only">Password</label>
          <input v-model='password' type="password" name='password' id="inputPassword" class="form-control" placeholder="Password">
          <div class='wrong' v-if="passwordError != null">
            {{ passwordError }}
          </div>
          <!-- <vue-recaptcha sitekey="6Lduz6MUAAAAAJ3kI1niLI9ruQkRpVMIM_dFmEqp">
            <button>Click me</button>
          </vue-recaptcha> -->
          <div class='wrong' v-if="errorTxt != null">
            {{ errorTxt }}
          </div>
          <input class="btn btn-lg btn-primary btn-block" type="button" @click="checkForm" value='登入'>
          <p class="mt-5 mb-3 text-muted">&copy; 2019</p>
      </form>
    </div>
  </div>
 
</template>

<script>
// import VueRecaptcha from "vue-recaptcha";
export default {
  name: "app",
  components: {
    // VueRecaptcha
    // Topmenu,
    // Footer
  },
  data() {
    return {
      account: null,
      accountError: null,
      password: null,
      passwordError: null,
      lock: false,
      status: "",
      errorTxt: null
    };
  },
  methods: {
    setStorage(key, value, expire) {
      let obj = {
        time: new Date().getTime(),
        value: value,
        expire: expire
      };
      let objStr = JSON.stringify(obj);
      localStorage.setItem(key, objStr);
    },
    checkForm: function(e) {
      if (!this.account) {
        this.accountError = "請輸入帳號";
      } else {
        this.accountError = null;
        this.lock = true;
      }
      if (!this.password) {
        this.passwordError = "請輸入密碼";
        this.lock = false;
      } else {
        this.passwordError = null;
        this.lock = true;
      }

      if (this.lock) {
        this.$axios
          .post("/connect/login.php", {
            account: this.account,
            password: this.password
          })
          .then(response => {
            // console.log(response.data.status);
            this.status = response.data.status;
            if (this.status == "success") {
              this.$cookies.set("status", "logined", 30 * 60);
              this.$router.push({ name: "adminoption" });
              this.$store.dispatch("setLevel", response.data.level);
            } else {
              this.errorTxt = "帳號密碼有誤";
              this.account = null;
              this.password = null;
            }
          });
      }
      e.preventDefault();
    }
  },
  mounted: function() {}
};
</script>

<style scoped src='@/assets/css/login.css'></style>
<style src='@/assets/css/bootstrap.css'></style>