<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/carousel"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 新增圖片
                    </div>
                    <div class="card-body">
                        <div class='box'>                            
                            <label class='h6'>上傳圖片</label>
                            <input type="file" accept=".png,.jpg" id="file" ref="file" v-on:change="handleFileUpload()" multiple="multiple"/>
                        </div>
                        <font class='prompt2'>尺寸建議寬高皆相同</font>
                        <font class='prompt2'>可一次選取多張圖片上傳</font>
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
      selected: "請選擇",
      photoData: {},
      photoInData: {},
      title: "",
      content: "",
      ids: "",
      name: "輪播圖片",
      file: null,
      image: "",
      haspic: false
    };
  },

  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files;
    },
    checkForm: function() {
      let formData = new FormData();

      if (this.file != null) {
        for (var i = 0; i < this.$refs.file.files.length; i++) {
          let files = this.$refs.file.files[i];
          formData.append("files[" + i + "]", files);
        }
        // formData.append("file", this.file);
      } else {
        alert("尚未選擇檔案上傳");
        return;
      }

      this.$axios
        .post("/connect/save/save-carousel.php?id=add", formData, {
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

  created() {}
};
</script>

<style lang='scss'>
</style>