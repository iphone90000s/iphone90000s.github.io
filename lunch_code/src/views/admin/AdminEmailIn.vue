<template>
  <main class="main">
    <Bread next-name="收件人Email設定" next-url="/admin/email"/>
    <div class="container-fluid">
      <div class="animated fadeIn">
          <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 收件人Email設定
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>姓名</label>
                          <input type='text' v-model="name" name='name'>
                      </div>
                      <div class='box'>
                            <label class='h6'>Email</label>
                            <input type='text' v-model="email" name='email'>
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
      emailData: {},
      name: "",
      email: "",
      ids: "",
      kind: ""
    };
  },
  methods: {
    checkForm: function() {
      let formData = new FormData();
      formData.append("id", this.ids);
      formData.append("email", this.email);
      formData.append("name", this.name);
      formData.append("kind", this.kind);
      this.$axios
        .post("/connect/save/save-email.php", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status == "success") {
            alert("資料送出成功");
            this.$router.go(-1);
          }
        });
    }
  },
  mounted: function() {},
  created() {
    this.kind = this.$route.params.kind;
    this.ids = this.$route.params.id;
    const vm = this;
    let formData = new FormData();
    formData.append("id", this.ids);
    this.$axios
      .post("/connect/get/email.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status != "error") {
          vm.name = response.data.name;
          vm.email = response.data.email;
        }
      });
  }
};
</script>

<style lang='scss'>
</style>