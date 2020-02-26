<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/manager"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 新增後台人員
                    </div>
                    <div class="card-body">
                        <div class='box'>
                            <label class='h6'>帳號</label>
                            <input type='text' v-model='account'>
                        </div>
                        <div class='box'>
                            <label class='h6'>密碼</label>
                            <input type='password' v-model='password'>
                        </div>
                        <div class='box'>
                            <label class='h6'>姓名</label>
                            <input type='text' v-model='managerName'>
                        </div>
                        <div class='box'>
                            <label class='h6'>權限</label>
                            <select v-model='level'>
                              <option :value='1' :selected='level'>最大管理者</option>
                              <option :value='2' :selected='level'>維護人員</option>
                            </select>
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
      managerData: {},
      name: "後台人員列表",
      managerName: "",
      ids: "",
      password: "",
      level: 2,
      account: ""
    };
  },
  methods: {
    checkForm: function() {
      this.ids = this.$route.params.id;
      let formData = new FormData();
      formData.append("id", this.ids);
      formData.append("account", this.account);
      formData.append("password", this.password);
      formData.append("managerName", this.managerName);
      formData.append("level", this.level);
      this.$axios
        .post("/connect/save/save-manager.php", formData, {
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
    const vm = this;
    this.ids = this.$route.params.id;
    let formData = new FormData();
    formData.append("id", this.ids);
    this.$axios
      .post("/connect/get/manager.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status == "error") {
          vm.managerData = {};
        } else {
          vm.managerName = response.data.name;
          vm.password = response.data.password;
          vm.account = response.data.account;
          vm.level = response.data.level;
        }
      });
  }
};
</script>

<style lang='scss'>
</style>