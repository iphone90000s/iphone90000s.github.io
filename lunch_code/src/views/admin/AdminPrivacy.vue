<template>
  <main class="main">
    <Bread next-name="同意個資&隱私權" next-url="/admin/privacy"/>
    <div class="container-fluid">
      <div class="animated fadeIn">
          <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
              <input type='hidden' name='crsfvalue' v-model='token'>
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 同意個資法
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>同意個資法</label>
                          <ckeditor v-model="personal" :config="config"></ckeditor>
                      </div>
                  </div>
              </div>     
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 隱私權政策
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>隱私權政策</label>
                          <ckeditor v-model="privacy" :config="config"></ckeditor>
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
import Ckeditor from "vue-ckeditor2";
export default {
  name: "app",
  components: {
    Bread,
    Ckeditor
  },
  data() {
    return {
      lock: false,
      token: "",
      optionData: {},
      newData: "",
      newData2: "",
      personal: "",
      privacy: ""
    };
  },
  computed: {
    config() {
      return this.$store.getters.getConfig;
    }
  },
  methods: {
    checkForm: function() {
      this.$axios
        .post("/connect/save/save-privacy.php", {
          personal: this.personal,
          privacy: this.privacy
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
    this.$axios.get("/connect/get/privacy.php", {}).then(response => {
      this.personal = response.data.personal;
      this.privacy = response.data.privacy;
    });
  },
  mounted() {}
};
</script>

<style lang='scss'>
</style> 