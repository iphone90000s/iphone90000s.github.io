<template>
  <div class="main-content">
    <topmenu></topmenu>
    <div class="inner-page">
      <div class="banner block">
        <img v-if="this.image" :src="baseurl+'/connect/upload/ogimage/'+this.image" />
        <div class="banner_text">
          <div class="text1">{{bannerTitle}}</div>
          <div class="text2">{{bannerTitle2}}</div>
        </div>
      </div>
      <div class="contents block">
        <div class="contact">
          <!-- <div class="maps">
              </div>
              <div class='boxs'>
          </div>-->
          <div class="order_box">
            <div class="titles">線上表單</div>
            <form action="#" method="post">
              <div class="order_in">
                <div class="input_box">
                  <label>公司名稱</label>
                  <input type="text" name="company" v-model="company" />
                </div>
                <div class="wrong" v-if="companyError != null">{{ companyError }}</div>
                <div class="input_box">
                  <label>聯絡人</label>
                  <input type="text" name="name" v-model="username" />
                </div>
                <div class="wrong" v-if="nameError != null">{{ nameError }}</div>
                <div class="input_box">
                  <label>聯絡電話</label>
                  <input type="text" name="phone" v-model="phone" />
                </div>
                <div class="wrong" v-if="phoneError != null">{{ phoneError }}</div>
                <div class="input_box">
                  <label>聯絡地址</label>
                  <input type="text" name="addr" v-model="addr" />
                </div>
                <div class="wrong" v-if="addrError != null">{{ addrError }}</div>
                <div class="input_box">
                  <label>電子信箱</label>
                  <input type="text" name="email" v-model="email" />
                </div>
                <div class="wrong" v-if="emailError != null">{{ emailError }}</div>
                <div class="input_box">
                  <label>內容</label>
                  <textarea name="msg" v-model="content"></textarea>
                </div>
                <div class="wrong" v-if="contentError != null">{{ contentError }}</div>
                <input class="submit_btn" @click="checkForm" type="button" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Topmenu from "../components/topmenu.vue";
import Footer from "../components/footer.vue";
export default {
  name: "app",
  components: {
    Topmenu,
    Footer
  },
  data() {
    return {
      baseurl: this.GLOBAL.BASE_URL,
      company: null,
      companyError: null,
      username: null,
      nameError: null,
      phone: null,
      phoneError: null,
      fax: null,
      faxError: null,
      cellphone: null,
      cellphoneError: null,
      addr: null,
      addrError: null,
      email: null,
      emailError: null,
      content: null,
      contentError: null,
      info: null,
      totalCheck: true,
      bannerTitle: "",
      bannerTitle2: "",
      image: ""
    };
  },
  methods: {
    checkForm: function() {
      if (!this.company) {
        this.companyError = "請輸入公司名稱";
        this.totalCheck = false;
      } else {
        this.companyError = null;
        this.totalCheck = true;
      }

      if (!this.username) {
        this.nameError = "請輸入聯絡人";
        this.totalCheck = false;
      } else {
        this.nameError = null;
        this.totalCheck = true;
      }

      if (this.phone) {
        if (this.phone.length < 7) {
          this.phoneError = "聯絡電話格式不正確";
          this.totalCheck = false;
        } else {
          this.phoneError = null;
          this.totalCheck = true;
        }
      }
      if (this.totalCheck) {
        alert("因此站為測試站，送出表單功能暫時關閉");
        // let formData = new FormData();
        // formData.append("company", this.company);
        // formData.append("username", this.username);
        // formData.append("phone", this.phone);

        // formData.append("addr", this.addr);
        // formData.append("email", this.email);
        // formData.append("content", this.content);
        // this.$axios
        //   .post("/connect/save/save-contact.php", formData, {
        //     headers: {
        //       "Content-Type": "multipart/form-data"
        //     }
        //   })
        //   .then(response => {
        //     if (response.data.status == "success") {
        //       alert("資料送出成功");
        //       this.$router.go(0);
        //     } else if (response.data.status == "error") {
        //       alert("資料送出失敗");
        //     }
        //   });
      }
    }
  },
  mounted() {
    // axios
    //   .get("src/contact.php")
    //   .then(response => (this.info = response.data.title));
  },
  created() {
    let formData = new FormData();
    formData.append("options", "7");
    this.$axios
      .post("/connect/get/options.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status == "error") {
          this.Datas = {};
        } else {
          this.bannerTitle = response.data.title1;
          this.bannerTitle2 = response.data.title2;
          this.image = response.data.image;
        }
      });
  }
};
</script>