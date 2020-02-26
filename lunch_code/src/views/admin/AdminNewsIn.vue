<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/news"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 新增最新消息
                    </div>
                    <div class="card-body">
                        <div class='box'>
                            <label class='h6'>選擇分類</label>
                            <select v-model='selected'>
                                <option disabled :selected="true">請選擇</option>
                                <option v-for="(list, index) in NewsKindData" :key="index" :value="list.serial" :selected="selected">
                                    {{list.title}}
                                </option>                                
                            </select>
                        </div>
                        <div class='box'>
                            <label class='h6'>上傳圖片</label>
                            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                        </div>
                        <div class='box' v-if="this.image">
                            <label class='h6'>目前已上傳圖片</label>
                            <img style='max-width:100px;' :src="baseurl+'/connect/upload/news/'+this.image">
                        </div>
                        <div class='box'>
                            <label class='h6'>標題</label>
                            <input type='text' v-model='title'>
                        </div>
                        <div class='box'>
                            <label class='h6'>副標題</label>
                            <input type='text' v-model='s_title'>
                        </div>
                        <div class='box'>
                            <label class='h6'>內文</label>
                            <textarea v-model='content'></textarea>
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
      baseurl: this.GLOBAL.BASE_URL,
      selected: "請選擇",
      NewsInData: {},
      NewsKindData: {},
      title: "",
      s_title: "",
      content: "",
      ids: "",
      name: "",
      file: null,
      image: "",
      haspic: false,
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
      formData.append("title", this.title);
      formData.append("s_title", this.s_title);
      formData.append("content", this.content);
      formData.append("kind", this.selected);
      formData.append("image", this.image);
      formData.append("sort", this.sort);
      this.$axios
        .post("/connect/save/save-newsin.php?id=" + this.ids, formData, {
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

    this.$axios.get("/connect/get/news.php", {}).then(response => {
      vm.NewsKindData = response.data;
    });

    this.$axios.get("/connect/get/options.php", {}).then(response => {
      vm.name = response.data[1].name;
    });

    this.ids = this.$route.params.id;
    if (this.ids != "add") {
      this.$axios
        .get("/connect/get/news_in.php?id=" + this.ids, {})
        .then(response => {
          vm.selected = response.data[0].kind;
          vm.title = response.data[0].title;
          vm.s_title = response.data[0].s_title;
          vm.content = response.data[0].content;
          vm.image = response.data[0].image;
          vm.sort = response.data[0].sort;
          if (response.data[0].image != "" || response.data[0].image != null) {
            vm.haspic = true;
          }
        });
    }
  }
};
</script>

<style lang='scss'>
</style>