<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/qa"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                  <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> {{name}}
                    </div>
                    <div class="card-body">
                        <div class='dataTables_wrapper dt-bootstrap4 no-footer'>
                            <div class='row'>
                                <div class='col-sm-12'>
                                    <router-link style="color:#fff;margin-bottom:10px;" class="btn btn-info" :to="{name:'admin-qa-kind'}">
                                        <i class="fa fa-edit"></i>
                                        分類編輯
                                    </router-link>
                                    <router-link style="color:#fff;margin-bottom:10px;margin-left: 10px;"  class="btn btn-info" :to="{name:'admin-qa-in',params:{id:'add'}}">
                                        <i class="fa fa-edit"></i>
                                        新增QA
                                    </router-link>
                                    <div class='box'>
                                        <label>{{name}}分類</label>
                                        <select @change='selectqa()' v-model='selected'>
                                            <option disabled :selected="true">請選擇</option>
                                            <option v-for="(list, index) in qaData" :key="index" :value="list.serial">
                                                {{list.title}}
                                            </option>
                                        </select>
                                    </div>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 150px;">No</th>
                                            <th class="sorting" style="width: 200px;">問題</th>
                                            <th class="sorting" style="width: 200px;">答案</th>
                                            <th class="sorting" style="width: 50px;">排序</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in qaInData" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>
                                                <div v-if='index != show'>{{list.title}}</div>
                                                <input v-if='index == show' type='text' v-model='list.title'>
                                            </td>
                                            <td>
                                                <div v-if='index != show'>{{list.content}}</div>
                                                <input v-if='index == show' type='text' v-model='list.content'>
                                            </td>
                                            <td>
                                                <div v-if='index != show'>{{list.sort}}</div>
                                                <input v-if='index == show' type='number' v-model='list.sort'>
                                            </td>
                                            <td>
                                                <button v-if='index == show' type='button' @click="changeKind(list.serial,list.title,list.content,list.sort)"  style='color:#fff' class="btn btn-success">
                                                    <i class="fa fa-edit"></i>
                                                    儲存
                                                </button>
                                                <button v-if='index != show' type='button' @click="showEdit(index)"  style='color:#fff' class="btn btn-info">
                                                    <i class="fa fa-edit"></i>
                                                    編輯
                                                </button>
                                                <button type='button' @click='deleteQa(list.serial);' style='margin:0 5px' class="btn btn-danger">
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
      qaData: {},
      name: "",
      show: -1,
      selected: "請選擇",
      qaInData: {}
    };
  },
  methods: {
    showEdit: function(index) {
      this.show = index;
    },
    deleteQa: function(num) {
      if (confirm("確定刪除此筆資料嗎")) {
        this.$axios
          .post("/connect/save/save-qain.php?id=" + num + "&delete=1")
          .then(response => {
            if (response.data.status == "success") {
              alert("刪除成功");
              this.$router.go(0);
            }
          });
      }
    },
    changeKind: function(num, title, content, sort) {
      let formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("sort", sort);
      this.$axios
        .post("/connect/save/save-qain.php?id=" + num, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status == "success") {
            alert("儲存成功");
            this.$router.go(0);
          }
        });
    },
    selectqa: function() {
      const vm = this;
      this.$axios
        .get("/connect/get/qa_in.php?id=" + this.selected, {})
        .then(response => {
          if (response.data.status == "error") {
            vm.qaInData = {};
          } else {
            vm.qaInData = response.data;
          }
        });
    }
  },
  mounted: function() {},
  created() {
    const vm = this;
    this.$axios.get("/connect/get/qa.php", {}).then(response => {
      if (response.data.status == "error") {
        vm.qaData = {};
      } else {
        vm.qaData = response.data;
      }
    });
    this.$axios.get("/connect/get/options.php", {}).then(response => {
      this.name = response.data[4].name;
    });
  }
};
</script>

<style lang='scss'>
</style>