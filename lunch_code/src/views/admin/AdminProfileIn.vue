<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/profile"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 公司簡介
                    </div>
                    <div class="card-body">
                        <div class='box'>
                            <label class='h6'>標題</label>
                            <input type='text' v-model='title'  name='profile'>
                        </div>
                        <div class='box'>
                            <label class='h6'>副標題</label>
                            <input type='text' v-model='s_title' name='profile'>
                        </div>
                        <div class='box'>
                            <label class='h6'>排序</label>
                            <input type='number' v-model='sort'>
                            <font class='require'>數字越小排越前面</font>
                        </div>
                        <div class='box'>
                            <label class='h6'>編輯器</label>
                            <ckeditor v-model="content" :config="config"></ckeditor>
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
// import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
export default {
  name: "app",
  components: {
    Bread,
    Ckeditor
  },
  data() {
    return {
      profileData: {},
      name: "",
      title: "",
      s_title: "",
      content: "",
      editData: "",
      newData: "",
      ids: "",
      sort: 0
    };
  },
  computed: {
    config() {
      return this.$store.getters.getConfig;
    }
  },
  methods: {
    editorInput(e) {
      console.log(e);
    },
    checkForm: function() {
      this.ids = this.$route.params.id;
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("s_title", this.s_title);
      formData.append("content", this.content);
      formData.append("sort", this.sort);
      this.$axios
        .post("/connect/save/save-profile.php?id=" + this.ids, formData, {
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

    if (this.$route.params.id != "add") {
      this.$axios
        .get("/connect/get/profile_in.php?id=" + this.$route.params.id, {})
        .then(response => {
          vm.profileData = response.data;
          this.title = response.data.title;
          this.s_title = response.data.s_title;
          this.content = response.data.content;
          this.sort = response.data.sort;
        });
    }

    this.$axios.get("/connect/get/options.php", {}).then(response => {
      this.name = response.data[0].name;
    });
  },
  mounted() {}
};
</script>

<style lang='scss'>
</style>