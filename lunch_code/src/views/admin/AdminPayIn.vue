<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/pay"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 新增/修改付款方式
                    </div>
                    <div class="card-body">
                        <div class='box'>
                            <label class='h6'>付款方式</label>
                            <input type='text' placeholder='ATM轉帳' v-model='title' >
                        </div>
                        <div class='box'>
                            <label class='h6'>方式內容</label>
                            <textarea v-model='content'></textarea>
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
      profileData: {},
      name: "付款方式",
      title: "",
      content: "",
      ids: ""
    };
  },

  methods: {
    checkForm: function() {
      this.ids = this.$route.params.id;
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      this.$axios
        .post("/connect/save/save-payin.php?id=" + this.ids, formData, {
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

  created() {
    if (this.$route.params.id != "add") {
      this.$axios
        .get("/connect/get/pay_in.php?id=" + this.$route.params.id, {})
        .then(response => {
          this.title = response.data.title;
          this.content = response.data.content;
        });
    }
  },
  mounted() {}
};
</script>

<style lang='scss'>
</style>