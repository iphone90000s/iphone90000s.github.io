<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/photo"/>
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
                            <label class='h6'>選擇分類</label>
                            <select v-model='selected'>
                                <option disabled :selected="true">請選擇</option>
                                <option v-for="(list, index) in photoData" :key="index" :value="list.serial" :selected="selected">
                                    {{list.title}}
                                </option>
                            </select>
                        </div>
                        <div class='box'>
                            <label class='h6'>檔案標題</label>
                            <input type="text" v-model='filetitle' />
                        </div>
                        <div class='box'>
                            <label class='h6'>上傳檔案</label>
                            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                        </div>
                        <div class='box' v-if="hasfile">
                            <label class='h6'>目前已上傳檔案</label>
                            <p>{{filename}}</p>
                        </div>
                        <div class='box'>
                            <label class='h6'>排序</label>
                            <input type='number' v-model='sort'>
                            <font class='require'>數字越小排越前面</font>
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
      selected: "請選擇",
      photoData: {},
      photoInData: {},
      title: "",
      content: "",
      ids: "",
      name: "",
      file: null,
      filename: "",
      hasfile: false,
      filetitle: "",
      sort: 0
    };
  },

  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    checkForm: function() {
      if (this.selected == "請選擇") {
        alert("請選擇分類");
        return;
      }

      let formData = new FormData();

      if (this.file != null) {
        formData.append("file", this.file);
      }
      formData.append("filetitle", this.filetitle);
      formData.append("kind", this.selected);
      formData.append("filename", this.filename);
      formData.append("sort", this.sort);
      this.ids = this.$route.params.id;
      this.$axios
        .post("/connect/save/save-downloadin.php?id=" + this.ids, formData, {
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

    this.$axios.get("/connect/get/download.php", {}).then(response => {
      vm.photoData = response.data;
    });

    if (this.$route.params.id != "add") {
      this.$axios
        .get("/connect/get/download_in.php?id=" + this.$route.params.id, {})
        .then(response => {
          vm.photoInData = response.data[0];
          vm.selected = response.data[0].kind;
          vm.filetitle = response.data[0].filetitle;
          vm.sort = response.data[0].sort;
        });
    }

    this.$axios.get("/connect/get/options.php", {}).then(response => {
      this.name = response.data[5].name;
    });
  }
};
</script>

<style lang='scss'>
</style>