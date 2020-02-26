<template>
  <main class="main">
    <Bread next-name="設定" next-url="/admin/option"/>
    <div class="container-fluid">
      <div class="animated fadeIn">
          <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
               <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 主視覺背景
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>主視覺背景</label>
                          <input type="file" id="bannerFile" ref="bannerFile" v-on:change="handleFileUpload('banner')"/>
                      </div>
                      <div class='box' v-if="this.bannerImage">
                          <label class='h6'>目前已上傳背景</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.bannerImage">
                      </div>
                  </div>
              </div> 
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 公司簡介
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>前台顯示名稱</label>
                          <input type='text' v-model="profile" name='profile'>
                      </div>
                      <div class='box'>
                          <label class='h6'>前台是否開啟</label>
                          <font>開啟</font>
                          <input type='radio' v-model='profilePick' :value="0">
                          <font>關閉</font>
                          <input type='radio' v-model='profilePick' :value="1">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>首頁是否顯示</label>
                          <font>顯示</font>
                          <input type='radio' v-model='profilePick2' :value="0">
                          <font>隱藏</font>
                          <input type='radio' v-model='profilePick2' :value="1">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner</label>
                          <input type="file" id="profileFile" ref="profileFile" v-on:change="handleFileUpload('profile')"/>
                      </div>
                      <div class='box' v-if="this.profileImage">
                          <label class='h6'>目前已上傳圖片</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.profileImage">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner主標題</label>
                          <input type='text' v-model="profileTitle">
                        </div>
                        <div class='box'>
                          <label class='h6'>Banner副標題</label>
                          <input type='text' v-model="profileTitle2">
                      </div>
                  </div>
              </div>     
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 最新消息
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>前台顯示名稱</label>
                          <input type='text' v-model="news" name='news'>
                      </div>
                      <div class='box'>
                          <label class='h6'>前台是否開啟</label>
                          <font>開啟</font>
                          <input type='radio' v-model='newsPick' :value="0">
                          <font>關閉</font>
                          <input type='radio' v-model='newsPick' :value="1" >
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>首頁是否顯示</label>
                          <font>顯示</font>
                          <input type='radio' v-model='newsPick2' :value="0">
                          <font>隱藏</font>
                          <input type='radio' v-model='newsPick2' :value="1">
                      </div>
                      <div class='box'>
                          <label class='h6'>首頁顯示幾則</label>
                          <input type='number' v-model='newsnum'>
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner</label>
                          <input type="file" id="newsFile" ref="newsFile" v-on:change="handleFileUpload('news')"/>
                      </div>
                      <div class='box' v-if="this.newsImage">
                          <label class='h6'>目前已上傳圖片</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.newsImage">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner主標題</label>
                          <input type='text' v-model="newsTitle">
                        </div>
                        <div class='box'>
                          <label class='h6'>Banner副標題</label>
                          <input type='text' v-model="newsTitle2">
                      </div>
                  </div>
              </div> 
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 商品介紹
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>前台顯示名稱</label>
                          <input type='text' v-model="product" name='product'>
                      </div>
                      <div class='box'>
                          <label class='h6'>前台是否開啟</label>
                          <font>開啟</font>
                          <input type='radio' v-model='productPick' :value="0">
                          <font>關閉</font>
                          <input type='radio' v-model='productPick' :value="1">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>首頁是否顯示</label>
                          <font>顯示</font>
                          <input type='radio' v-model='productPick2' :value="0">
                          <font>隱藏</font>
                          <input type='radio' v-model='productPick2' :value="1">
                      </div>
                      <div class='box'>
                          <label class='h6'>首頁顯示幾則</label>
                          <input type='number' v-model='productnum'>
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner</label>
                          <input type="file" id="productFile" ref="productFile" v-on:change="handleFileUpload('product')"/>
                      </div>
                      <div class='box' v-if="this.productImage">
                          <label class='h6'>目前已上傳圖片</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.productImage">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner主標題</label>
                          <input type='text' v-model="productTitle">
                        </div>
                        <div class='box'>
                          <label class='h6'>Banner副標題</label>
                          <input type='text' v-model="productTitle2">
                      </div>
                  </div>
              </div> 
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 現場實景
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>前台顯示名稱</label>
                          <input type='text' v-model="photo" name='photo'>
                      </div>
                      <div class='box'>
                          <label class='h6'>前台是否開啟</label>
                          <font>開啟</font>
                          <input type='radio' v-model='photoPick' :value="0">
                          <font>關閉</font>
                          <input type='radio' v-model='photoPick' :value="1">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>首頁是否顯示</label>
                          <font>顯示</font>
                          <input type='radio' v-model='photoPick2' :value="0">
                          <font>隱藏</font>
                          <input type='radio' v-model='photoPick2' :value="1">
                      </div>
                      <div class='box'>
                          <label class='h6'>首頁顯示幾則</label>
                          <input type='number' v-model='photonum'>
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner</label>
                          <input type="file" id="photoFile" ref="photoFile" v-on:change="handleFileUpload('photo')"/>
                      </div>
                      <div class='box' v-if="this.photoImage">
                          <label class='h6'>目前已上傳圖片</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.photoImage">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner主標題</label>
                          <input type='text' v-model="photoTitle">
                        </div>
                        <div class='box'>
                          <label class='h6'>Banner副標題</label>
                          <input type='text' v-model="photoTitle2">
                      </div>
                  </div>
              </div> 
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 常見問題
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>前台顯示名稱</label>
                          <input type='text' v-model="qa" name='qa'>
                      </div>
                      <div class='box'>
                          <label class='h6'>前台是否開啟</label>
                          <font>開啟</font>
                          <input type='radio' v-model='qaPick' :value="0">
                          <font>關閉</font>
                          <input type='radio' v-model='qaPick' :value="1">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>首頁是否顯示</label>
                          <font>顯示</font>
                          <input type='radio' v-model='qaPick2' :value="0">
                          <font>隱藏</font>
                          <input type='radio' v-model='qaPick2' :value="1">
                      </div>
                      <div class='box'>
                          <label class='h6'>首頁顯示幾則</label>
                          <input type='number' v-model='qanum'>
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner</label>
                          <input type="file" id="qaFile" ref="qaFile" v-on:change="handleFileUpload('qa')"/>
                      </div>
                      <div class='box' v-if="this.qaImage">
                          <label class='h6'>目前已上傳圖片</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.qaImage">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner主標題</label>
                          <input type='text' v-model="qaTitle">
                        </div>
                        <div class='box'>
                          <label class='h6'>Banner副標題</label>
                          <input type='text' v-model="qaTitle2">
                      </div>
                  </div>
              </div> 
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 檔案下載
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>前台顯示名稱</label>
                          <input type='text' v-model="download" name='download'>
                      </div>
                      <div class='box'>
                          <label class='h6'>前台是否開啟</label>
                          <font>開啟</font>
                          <input type='radio' v-model='downloadPick' :value="0">
                          <font>關閉</font>
                          <input type='radio' v-model='downloadPick' :value="1">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>首頁是否顯示</label>
                          <font>顯示</font>
                          <input type='radio' v-model='downloadPick2' :value="0">
                          <font>隱藏</font>
                          <input type='radio' v-model='downloadPick2' :value="1">
                      </div>
                      <div class='box'>
                          <label class='h6'>首頁顯示幾則</label>
                          <input type='number' v-model='downloadnum'>
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner</label>
                          <input type="file" id="downloadFile" ref="downloadFile" v-on:change="handleFileUpload('download')"/>
                      </div>
                      <div class='box' v-if="this.downloadImage">
                          <label class='h6'>目前已上傳圖片</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.downloadImage">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner主標題</label>
                          <input type='text' v-model="downloadTitle">
                        </div>
                        <div class='box'>
                          <label class='h6'>Banner副標題</label>
                          <input type='text' v-model="downloadTitle2">
                      </div>
                  </div>
              </div> 
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 聯絡我們
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>前台顯示名稱</label>
                          <input type='text' v-model="contact" name='contact'>
                      </div>
                      <div class='box'>
                          <label class='h6'>前台是否開啟</label>
                          <font>開啟</font>
                          <input type='radio' v-model='contactPick' :value="0" >
                          <font>關閉</font>
                          <input type='radio' v-model='contactPick' :value="1" >
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>首頁是否顯示</label>
                          <font>顯示</font>
                          <input type='radio' v-model='contactPick2' :value="0">
                          <font>隱藏</font>
                          <input type='radio' v-model='contactPick2' :value="1">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner</label>
                          <input type="file" id="contactFile" ref="contactFile" v-on:change="handleFileUpload('contact')"/>
                      </div>
                      <div class='box' v-if="this.contactImage">
                          <label class='h6'>目前已上傳圖片</label>
                          <img style='max-width:100px;' :src="baseurl+'/connect/upload/ogimage/'+this.contactImage">
                      </div>
                      <hr>
                      <div class='box'>
                          <label class='h6'>Banner主標題</label>
                          <input type='text' v-model="contactTitle">
                        </div>
                        <div class='box'>
                          <label class='h6'>Banner副標題</label>
                          <input type='text' v-model="contactTitle2">
                      </div>
                  </div>
              </div>   
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 登入/註冊
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>前台是否開啟</label>
                          <font>開啟</font>
                          <input type='radio' v-model='loginPick' :value="0" >
                          <font>關閉</font>
                          <input type='radio' v-model='loginPick' :value="1" >
                      </div>
                  </div>
              </div> 
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 購物車
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>前台是否開啟</label>
                          <font>開啟</font>
                          <input type='radio' v-model='carPick' :value="0" >
                          <font>關閉</font>
                          <input type='radio' v-model='carPick' :value="1" >
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
      baseurl: this.GLOBAL.BASE_URL,
      isRouterAlive: true,
      profile: "",
      profilePick: "",
      news: "",
      newsPick: "",
      product: "",
      productPick: "",
      photo: "",
      photoPick: "",
      qa: "",
      qaPick: "",
      download: "",
      downloadPick: "",
      contact: "",
      contactPick: "",
      loginPick: "",
      carPick: "",
      lock: false,
      token: "",
      optionData: {},
      profileTitle: "",
      profileTitle2: "",
      newsTitle: "",
      newsTitle2: "",
      productTitle: "",
      productTitle2: "",
      photoTitle: "",
      photoTitle2: "",
      qaTitle: "",
      qaTitle2: "",
      downloadTitle: "",
      downloadTitle2: "",
      contactTitle: "",
      contactTitle2: "",
      file: null,
      image: "",
      haspic: false,

      profilePick2: 0,
      newsPick2: 0,
      productPick2: 0,
      photoPick2: 0,
      qaPick2: 0,
      downloadPick2: 0,
      contactPick2: 0,

      profileFile: null,
      newsFile: null,
      productFile: null,
      photoFile: null,
      qaFile: null,
      downloadFile: null,
      contactFile: null,
      bannerFile: null,

      profileImage: null,
      newsImage: null,
      productImage: null,
      photoImage: null,
      qaImage: null,
      downloadImage: null,
      contactImage: null,
      bannerImage: null,

      newsnum: 0,
      productnum: 0,
      photonum: 0,
      qanum: 0,
      downloadnum: 0
    };
  },
  methods: {
    handleFileUpload(text) {
      if (text == "profile") {
        this.profileFile = this.$refs.profileFile.files[0];
      } else if (text == "news") {
        this.newsFile = this.$refs.newsFile.files[0];
      } else if (text == "product") {
        this.productFile = this.$refs.productFile.files[0];
      } else if (text == "photo") {
        this.photoFile = this.$refs.photoFile.files[0];
      } else if (text == "qa") {
        this.qaFile = this.$refs.qaFile.files[0];
      } else if (text == "download") {
        this.downloadFile = this.$refs.downloadFile.files[0];
      } else if (text == "contact") {
        this.contactFile = this.$refs.contactFile.files[0];
      } else if (text == "banner") {
        this.bannerFile = this.$refs.bannerFile.files[0];
      }
    },
    checkForm: function() {
      let formData = new FormData();
      formData.append("profile", this.profile);
      formData.append("profilePick", this.profilePick);
      formData.append("profileTitle", this.profileTitle);
      formData.append("profileTitle2", this.profileTitle2);
      formData.append("news", this.news);
      formData.append("newsPick", this.newsPick);
      formData.append("newsTitle", this.newsTitle);
      formData.append("newsTitle2", this.newsTitle2);
      formData.append("product", this.product);
      formData.append("productPick", this.productPick);
      formData.append("productTitle", this.productTitle);
      formData.append("productTitle2", this.productTitle2);
      formData.append("photo", this.photo);
      formData.append("photoPick", this.photoPick);
      formData.append("photoTitle", this.photoTitle);
      formData.append("photoTitle2", this.photoTitle2);
      formData.append("qa", this.qa);
      formData.append("qaPick", this.qaPick);
      formData.append("qaTitle", this.qaTitle);
      formData.append("qaTitle2", this.qaTitle2);
      formData.append("download", this.download);
      formData.append("downloadPick", this.downloadPick);
      formData.append("downloadTitle", this.downloadTitle);
      formData.append("downloadTitle2", this.downloadTitle2);
      formData.append("contact", this.contact);
      formData.append("contactPick", this.contactPick);
      formData.append("contactTitle", this.contactTitle);
      formData.append("contactTitle2", this.contactTitle2);
      formData.append("loginPick", this.loginPick);
      formData.append("carPick", this.carPick);

      formData.append("profilePick2", this.profilePick2);
      formData.append("newsPick2", this.newsPick2);
      formData.append("productPick2", this.productPick2);
      formData.append("photoPick2", this.photoPick2);
      formData.append("qaPick2", this.qaPick2);
      formData.append("downloadPick2", this.downloadPick2);
      formData.append("contactPick2", this.contactPick2);

      formData.append("newsnum", this.newsnum);
      formData.append("productnum", this.productnum);
      formData.append("photonum", this.photonum);
      formData.append("qanum", this.qanum);
      formData.append("downloadnum", this.downloadnum);

      if (this.profileFile != null) {
        formData.append("profileFile", this.profileFile);
      }
      if (this.newsFile != null) {
        formData.append("newsFile", this.newsFile);
      }
      if (this.productFile != null) {
        formData.append("productFile", this.productFile);
      }
      if (this.photoFile != null) {
        formData.append("photoFile", this.photoFile);
      }
      if (this.qaFile != null) {
        formData.append("qaFile", this.qaFile);
      }
      if (this.downloadFile != null) {
        formData.append("downloadFile", this.downloadFile);
      }
      if (this.contactFile != null) {
        formData.append("contactFile", this.contactFile);
      }

      if (this.bannerFile != null) {
        formData.append("bannerFile", this.bannerFile);
      }

      this.$axios
        .post("/connect/save/save-options.php", formData, {
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
    this.$axios.post("/connect/get/options.php", {}).then(response => {
      console.log(response.data);

      this.image = response.data[0].image;
      this.profile = response.data[0].name;
      this.profilePick = response.data[0].open;
      this.profileTitle = response.data[0].title;
      this.profileTitle2 = response.data[0].s_title;
      this.profileImage = response.data[0].image;
      this.profilePick2 = response.data[0].open2;

      this.news = response.data[1].name;
      this.newsPick = response.data[1].open;
      this.newsTitle = response.data[1].title;
      this.newsTitle2 = response.data[1].s_title;
      this.newsImage = response.data[1].image;
      this.newsPick2 = response.data[1].open2;
      this.newsnum = response.data[1].num;

      this.product = response.data[2].name;
      this.productPick = response.data[2].open;
      this.productTitle = response.data[2].title;
      this.productTitle2 = response.data[2].s_title;
      this.productImage = response.data[2].image;
      this.productPick2 = response.data[2].open2;
      this.productnum = response.data[2].num;

      this.photo = response.data[3].name;
      this.photoPick = response.data[3].open;
      this.photoTitle = response.data[3].title;
      this.photoTitle2 = response.data[3].s_title;
      this.photoImage = response.data[3].image;
      this.photoPick2 = response.data[3].open2;
      this.photonum = response.data[3].num;
      this.qa = response.data[4].name;
      this.qaPick = response.data[4].open;
      this.qaTitle = response.data[4].title;
      this.qaTitle2 = response.data[4].s_title;
      this.qaImage = response.data[4].image;
      this.qaPick2 = response.data[4].open2;
      this.qanum = response.data[4].num;

      this.download = response.data[5].name;
      this.downloadPick = response.data[5].open;
      this.downloadTitle = response.data[5].title;
      this.downloadTitle2 = response.data[5].s_title;
      this.downloadImage = response.data[5].image;
      this.downloadPick2 = response.data[5].open2;
      this.downloadnum = response.data[5].num;

      this.contact = response.data[6].name;
      this.contactPick = response.data[6].open;
      this.contactTitle = response.data[6].title;
      this.contactTitle2 = response.data[6].s_title;
      this.contactImage = response.data[6].image;
      this.contactPick2 = response.data[6].open2;

      this.login = response.data[7].name;
      this.loginPick = response.data[7].open;

      this.carPick = response.data[8].open;

      this.bannerImage = response.data[9].image;
    });
  }
};
</script>

<style lang='scss'>
</style>