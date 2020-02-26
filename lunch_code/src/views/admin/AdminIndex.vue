<template>
  <main class="main">
    <Bread next-name="首頁設定" next-url="/admin/index"/>
    <div class="container-fluid">
      <div class="animated fadeIn">
          <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
              <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 首頁自訂區域
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>首頁上方區域</label>
                          <ckeditor v-model="content" :config="config"></ckeditor>
                      </div>
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>首頁下方區域</label>
                          <ckeditor v-model="content2" :config="config"></ckeditor>
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
      editData: "",
      newData: "",
      content: "",
      content2: ""
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
        .post("/connect/save/save-index.php", {
          content: this.content,
          content2: this.content2
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
    this.$axios.get("/connect/get/index.php", {}).then(response => {
      vm.profileData = response.data;
      this.content = response.data.content;
      this.content2 = response.data.content2;
      // this.newData.setData(this.content);
    });
  },
  mounted: function() {}
};
</script>

<style lang='scss'>
</style>