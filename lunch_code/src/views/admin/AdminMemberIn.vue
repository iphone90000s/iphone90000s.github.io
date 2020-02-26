<template>
  <main class="main">
    <Bread next-name="會員名單" next-url="/admin/member/"/>
    <div class="container-fluid">
      <div class="animated fadeIn">
          <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 會員資料
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>帳號</label>
                          <span>{{account}}</span>
                      </div>
                      <div class='box'>
                          <label class='h6'>密碼</label>
                          <input type='password' v-model='password'>
                      </div>
                      <div class='box'>
                          <label class='h6'>姓名</label>
                          <span>{{name}}</span>
                      </div>
                      <div class='box'>
                          <label class='h6'>Email</label>
                          <span>{{email}}</span>
                      </div>
                      <div class='box'>
                          <label class='h6'>電話</label>
                          <span>{{phone}}</span>
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
  name: "app",
  components: {
    Bread
  },
  data() {
    return {
      ids: "",
      account: "",
      password: "",
      name: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    checkForm: function() {
      let formData = new FormData();
      formData.append("changePassword", "changePassword");
      formData.append("id", this.ids);
      formData.append("password", this.password);
      this.$axios
        .post("/connect/save/save-member.php", formData, {
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
  created() {
    this.ids = this.$route.params.id;
    let formData = new FormData();
    formData.append("id", this.ids);
    this.$axios
      .post("/connect/get/member.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        this.account = response.data.account;
        this.password = response.data.password;
        this.name = response.data.name;
        this.phone = response.data.phone;
        this.email = response.data.email;
      });
  },
  mounted() {}
};
</script>

<style lang='scss'>
</style>