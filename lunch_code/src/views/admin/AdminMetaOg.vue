<template>
  <main class="main">
    <Bread next-name="Meta&Og設定" next-url="/admin/option"/>
    <div class="container-fluid">
      <div class="animated fadeIn">
          <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 網站設定
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>網站名稱</label>
                          <input type='text' v-model="title" name='title'>
                      </div>
                      <div class='box'>
                          <label class='h6'>網站Logo</label>
                          <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                      </div>
                      <div class='box' v-if="this.image">
                          <label class='h6'>目前已上傳圖片</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.image">
                      </div>
                  </div>
              </div>     
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 網站分享圖
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>網站分享圖上傳</label>
                          <input type="file" id="file2" ref="file2" v-on:change="handleFileUpload2()"/>
                          <div class='require'>尺寸:600*315</div>
                      </div>
                      <div class='box' v-if="this.ogimage != ''">
                          <label class='h6'>目前已上傳圖片</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.ogimage">
                      </div>
                  </div>
              </div>  
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> Meta設定
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>Meta-Keyword</label>
                          <textarea v-model='metaKeyword'></textarea>
                      </div>
                      <div class='box'>
                          <label class='h6'>Meta-Description</label>
                          <textarea  v-model='metaDescription'></textarea>
                      </div>
                  </div>
              </div>
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> Og設定
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>Og-Keyword</label>
                          <textarea v-model='ogKeyword'></textarea>
                      </div>
                      <div class='box'>
                          <label class='h6'>Og-Description</label>
                          <textarea v-model='ogDescription'></textarea>
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
      optionData: {},
      baseurl: this.GLOBAL.BASE_URL,
      title: "",
      metaKeyword: "",
      metaDescription: "",
      ogKeyword: "",
      ogDescription: "",
      file: null,
      image: "",
      haspic: false,
      ogimage: ""
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    handleFileUpload2() {
      this.file2 = this.$refs.file2.files[0];
    },
    checkForm: function() {
      let formData = new FormData();
      if (this.file != null) {
        formData.append("file", this.file);
      }
      if (this.file2 != null) {
        formData.append("file2", this.file2);
      }
      formData.append("title", this.title);
      formData.append("metaKeyword", this.metaKeyword);
      formData.append("metaDescription", this.metaDescription);
      formData.append("ogKeyword", this.ogKeyword);
      formData.append("ogDescription", this.ogDescription);
      formData.append("image", this.image);
      this.$axios
        .post("/connect/save/save-meta.php", formData, {
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
    this.$axios.get("/connect/get/meta.php", {}).then(response => {
      if (response.data.status != "error") {
        vm.title = response.data[0].title;
        vm.metaKeyword = response.data[0].metaKeyword;
        vm.metaDescription = response.data[0].metaDescription;
        vm.ogKeyword = response.data[0].ogKeyword;
        vm.ogDescription = response.data[0].ogDescription;
        vm.image = response.data[0].image;
        vm.ogimage = response.data[0].ogimage;
      }
    });
  }
};
</script>

<style lang='scss'>
</style>