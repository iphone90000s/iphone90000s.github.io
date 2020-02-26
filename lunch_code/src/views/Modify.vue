<template>
    <div class="main-content">
        <topmenu></topmenu>        
        <div class='inner-page'>
          <div class='banner block'>
            <img src='@/assets/img/in_Top.png'>
            <div class='banner_text'>
              <div class='text1'>數位化專業團隊．提供企業解決方案</div>
              <div class='text2'>FAQ</div>
            </div>
          </div>
          <div class='contents block'>
            <div class='left'>
              <div class='title'>會員專區</div>
              <div class='en_title'>Member</div>
              <ul>
                <li>
                  <router-link :to="{name:'order'}">訂單查詢</router-link>
                </li>
                <li>
                  <router-link :to="{name:'modify'}">會員資料修改</router-link>
                </li>
              </ul>
            </div>
            <div class='right'>
              <div class='title'>會員資料修改</div>
              <div class="registereds">
                <div class="in">
                  <div class="order_lists">
                    <label>會員姓名</label>
                    <div class="orders">
                      <i class="far fa fa-id-card"></i>
                      <input type="text" placeholder="請輸入真實姓名" v-model='memberData.name' name="name">
                    </div>
                    <div class='require' v-if='nameCheck'>{{errorText}}</div>
                  </div>
                  <div class="order_lists">
                    <label>手機號碼</label>
                    <div class="orders">
                      <i class=" fa  fa-phone"></i>
                      <input type="text" placeholder="請輸入手機號碼" v-model='memberData.phone' name="phone">
                    </div>
                    <div class='require' v-if='phoneCheck'>{{errorText}}</div>
                  </div>
                  <div class="order_lists">
                    <label>Email</label>
                    <div class="orders">
                      <i class="far fa fa-envelope"></i>
                      <input type="text" placeholder="請輸入Email" v-model='memberData.email' name="email">
                    </div>
                    <div class='require' v-if='emailCheck'>{{errorText}}</div>
                  </div>
                  <!-- <div class="order_lists">
                    <label>密碼</label>
                    <div class="orders">
                      <i class="fa fas fa-unlock-alt"></i>
                      <input type="password" placeholder="密碼長度為8-16碼" name="pwd">
                    </div>
                    <div class='require' v-if='passwordCheck'>{{errorText}}</div>
                  </div>
                  <div class="order_lists">
                    <label>確認密碼</label>
                    <div class="orders">
                      <i class="fas fa fa-lock"></i>
                      <input type="password" placeholder="請在輸入一次密碼" name="repwd">
                    </div>
                    <div class='require' v-if='passwordCheck2'>{{errorPassword}}</div>
                  </div> -->
                  <div class="checkbtn">
                    <input type="button" value="確認送出" @click='checkForm'>
                  </div>
                </div>
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
      name: "",
      phone: "",
      email: "",
      password: "",
      checkPassword: "",
      nameCheck: false,
      phoneCheck: false,
      emailCheck: false,
      passwordCheck: false,
      passwordCheck2: false,
      totalCheck: true,
      errorText: "此欄位不得為空",
      errorPassword: "與密碼不一致",
      memberData: ""
    };
  },

  methods: {
    checkForm() {
      if (this.memberData.name == "") {
        this.nameCheck = true;
        this.totalCheck = false;
      } else {
        this.nameCheck = false;
        this.totalCheck = true;
      }
      if (this.memberData.phone == "") {
        this.phoneCheck = true;
        this.totalCheck = false;
      } else {
        this.phoneCheck = false;
        this.totalCheck = true;
      }
      if (this.memberData.email == "") {
        this.emailCheck = true;
        this.totalCheck = false;
      } else {
        this.emailCheck = false;
        this.totalCheck = true;
      }
      // console.log(this.nameCheck);
      if (this.totalCheck) {
        let formData = new FormData();
        formData.append("modify", "modify");
        formData.append("id", this.memberData.serial);
        formData.append("name", this.memberData.name);
        formData.append("phone", this.memberData.phone);
        formData.append("email", this.memberData.email);
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
    }
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  },
  created() {
    this.token = this.$store.getters.getToken;
    let formData = new FormData();
    formData.append("token", this.token);
    formData.append("modify", "modify");
    this.$axios
      .post("/connect/get/checkToken.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status == "error") {
          this.memberData = {};
        } else {
          this.memberData = response.data;
        }
      });
  }
};
</script>