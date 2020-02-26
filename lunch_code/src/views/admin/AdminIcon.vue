<template>
  <main class="main">
    <Bread next-name="社群Icon管理" next-url="/admin/icon"/>
    <div class="container-fluid">
      <div class="animated fadeIn">
          <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
              <input type='hidden' name='crsfvalue' v-model='token'>
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 社群Icon管理
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>FB Message</label>
                          <font>開啟</font>
                          <input type='radio' v-model='loginPick' :value="0" >
                          <font>關閉</font>
                          <input type='radio' v-model='loginPick' :value="1" >
                      </div>
                      <div class='box'>
                          <label class='h6'>SMTPAuth</label>
                          <select v-model="auth">
                              <option value='True' selected :selectd="auth=='true'">true</option>
                              <option value='False' :selectd="auth=='false'">false</option>
                          </select>
                      </div>
                      <div class='box'>
                          <label class='h6'>Username</label>
                          <input type='text' v-model="username" name='username'>
                      </div>
                      <div class='box'>
                          <label class='h6'>Password</label>
                          <input type='password' v-model="password" name='password'>
                      </div>
                  </div>
              </div>           
              <div class="btn_style">
                  <button @click="checkForm" class="btn btn-block btn-outline-dark" type="button">送出</button>
              </div>               
          </form>
      </div>
    </div>
  </main>

</template>

<script>
import Bread from "../../components/bread.vue";
export default {
  provide() {
    return {
      reload: this.reload
    };
  },
  name: "app",
  components: {
    Bread
  },
  data() {
    return {
      Datas: {},
      host: "",
      auth: "",
      username: "",
      password: ""
    };
  },
  methods: {
    checkForm: function() {
      let formData = new FormData();
      formData.append("host", this.host);
      formData.append("auth", this.auth);
      formData.append("username", this.username);
      formData.append("password", this.password);
      this.$axios
        .post("/connect/save/save-smtp.php", formData, {
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
    let formData = new FormData();
    formData.append("get", "get");
    this.$axios
      .post("/connect/get/smtp.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status == "error") {
          vm.Datas = {};
        } else {
          vm.host = response.data.host;
          vm.auth = response.data.auth;
          vm.username = response.data.username;
          vm.password = response.data.password;
        }
      });
  }
};
</script>

<style lang='scss'>
</style>