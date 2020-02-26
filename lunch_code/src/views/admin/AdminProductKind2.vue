<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/product"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 新增分類
                    </div>
                    <div class="card-body">
                        <div class='box'>
                            <label class='h6'>新增分類(第二層)</label>
                            <input type='text' name='kind' v-model='kindTitle'>
                        </div>
                    </div>
                   
                </div>
                <div class="btn_style">
                    <button @click="checkForm" class="btn btn-block btn-outline-dark" type="button">送出</button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 分類編輯
                    </div>
                    <div class="card-body">
                        <div class='dataTables_wrapper dt-bootstrap4 no-footer'>
                            <div class='row'>
                                <div class='col-sm-12'>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 70px;">No</th>
                                            <th class="sorting" style="width: 150px;">第一層分類</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in productKindData" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>
                                                <div v-if='index != show'>{{list.title}}</div>
                                                <input v-if='index == show' type='text' v-model='list.title'>
                                            </td>
                                            <td>                                              
                                                <button v-if='index == show' type='button' @click="changeKind(list.serial,list.title)"  style='color:#fff' class="btn btn-success">
                                                    <i class="fa fa-edit"></i>
                                                    儲存
                                                </button>
                                                <button v-if='index != show' type='button' @click="showEdit(index)"  style='color:#fff' class="btn btn-info">
                                                    <i class="fa fa-edit"></i>
                                                    編輯
                                                </button>
                                                <button style='margin:0 5px' @click='gotoNext(list.serial);' type='button' class="btn btn-primary">
                                                    <i class="fa fa-edit"></i>
                                                    編輯下一層
                                                </button>
                                                <button style='margin:0 5px' @click='deleteKind(list.serial);' type='button' class="btn btn-danger">
                                                    <i class="fa fa-trash-o"></i>
                                                    刪除
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
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
      thelist: {
        name: []
      },
      productKindData: {},
      show: -1,
      name: "",
      title: "",
      kindTitle: "",
      kindSmallTitle: ""
    };
  },

  methods: {
    gotoNext: function(num) {
      this.$router.push({
        name: "admin-product-kind3",
        params: { id: this.$route.params.id, id2: num }
      });
    },
    deleteKind: function(num) {
      if (confirm("確定刪除此筆資料嗎")) {
        this.$axios
          .post(
            "/connect/save/save-product-kind.php?id=" +
              num +
              "&delete=1&" +
              "layer1=" +
              this.$route.params.id
          )
          .then(response => {
            if (response.data.status == "success") {
              alert("刪除成功");
              this.$router.go(0);
            }
          });
      }
    },
    showEdit: function(index) {
      this.show = index;
    },
    checkForm: function() {
      let formData = new FormData();
      formData.append("title", this.kindTitle);
      this.$axios
        .post(
          "/connect/save/save-product-kind.php?layer1=" + this.$route.params.id,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(response => {
          if (response.data.status == "success") {
            alert("資料送出成功");
            this.$router.go(0);
          }
        });
    },
    changeKind: function(num, title) {
      let formData = new FormData();
      formData.append("title", title);
      this.$axios
        .post(
          "/connect/save/save-product-kind.php?id=" +
            num +
            "&layer1=" +
            this.$route.params.id,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(response => {
          if (response.data.status == "success") {
            alert("儲存成功");
            this.$router.go(0);
          }
        });
    }
  },

  created() {
    this.$axios.get("/connect/get/options.php", {}).then(response => {
      this.name = response.data[2].name;
    });

    this.$axios
      .get("/connect/get/product.php?layer1=" + this.$route.params.id, {})
      .then(response => {
        if (response.data.status == "error") {
          this.productKindData = {};
        } else {
          this.productKindData = response.data;
        }
      });
  }
};
</script>

<style lang='scss'>
</style>