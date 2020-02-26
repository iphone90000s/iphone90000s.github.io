<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/qa"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 新增QA
                    </div>
                    <div class="card-body">
                        <div class='box'>
                            <label class='h6'>選擇分類</label>
                            <select v-model='selected'>
                                <option disabled :selected="true">請選擇</option>
                                <option v-for="(list, index) in qaData" :key="index" :value="list.serial">
                                    {{list.title}}
                                </option>
                            </select>
                        </div>
                        <div class='box'>
                            <label class='h6'>問題</label>
                            <input type='text' v-model='title'>
                        </div>
                        <div class='box'>
                            <label class='h6'>答案</label>
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
      selected: "請選擇",
      qaData: {},
      title: "",
      content: "",
      ids: "",
      name: "",
      sort: 0
    };
  },

  methods: {
    checkForm: function() {
      if (this.selected == "請選擇") {
        alert("請選擇分類");
        return;
      }
      this.ids = this.$route.params.id;
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("kind", this.selected);
      formData.append("sort", this.sort);
      this.$axios
        .post("/connect/save/save-qain.php?id=" + this.ids, formData, {
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

    this.$axios.get("/connect/get/qa.php", {}).then(response => {
      vm.qaData = response.data;
    });

    this.$axios.get("/connect/get/options.php", {}).then(response => {
      this.name = response.data[4].name;
    });
  }
};
</script>

<style lang='scss'>
</style>