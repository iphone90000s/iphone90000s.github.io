<template>
  <main class="main">
    <Bread next-name="Footer設定" next-url="/admin/footer"/>
    <div class="container-fluid">
      <div class="animated fadeIn">
          <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
              <input type='hidden' name='crsfvalue' v-model='token'>
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> Footer設定
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>公司名稱</label>
                          <input type='text' v-model="title">
                      </div>
                      <div class='box'>
                          <label class='h6'>連絡方式</label>
                          <input type='text' v-model="contact">
                      </div>
                      <div class='box'>
                          <label class='h6'>Copyright</label>
                          <input type='text' v-model="copywrite">
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
      title: "",
      contact: "",
      copywrite: "",
      Datas: ""
    };
  },
  methods: {
    checkForm: function() {
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("contact", this.contact);
      formData.append("copywrite", this.copywrite);
      this.$axios
        .post("/connect/save/save-footer.php", formData, {
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
    const vm = this;
    let formData = new FormData();
    formData.append("footer", "footer");
    this.$axios
      .post("/connect/get/footer.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        //找分類
        if (response.data.status == "error") {
          vm.Datas = {};
        } else {
          vm.title = response.data.title;
          vm.contact = response.data.contact;
          vm.copywrite = response.data.copywrite;
        }
      });
  },
  mounted() {}
};
</script>

<style lang='scss'>
</style>