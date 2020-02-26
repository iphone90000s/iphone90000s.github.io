<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/manager"/>
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
                                    <router-link style="color:#fff;margin-bottom:10px;margin-left: 10px;"  class="btn btn-info" :to="{name:'admin-manager-in',params:{id:'add'}}">
                                        <i class="fa fa-edit"></i>
                                        新增後台人員
                                    </router-link>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 150px;">No</th>
                                            <th class="sorting" style="width: 150px;">帳號</th>
                                            <th class="sorting" style="width: 150px;">姓名</th>
                                            <th class="sorting" style="width: 150px;">權限</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in filteredRows" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>{{list.account}}</td>
                                            <td>{{list.name}}</td>
                                            <td>{{list.level}}</td>
                                            <td>
                                                <router-link style="color:#fff" class='btn btn-info' :to="{name:'admin-manager-in',params:{id:list.serial}}"><i class="fa fa-edit"></i>編輯</router-link>

                                               <button type='button' @click='deletes(list.serial);' style='margin:0 5px' class="btn btn-danger">
                                                    <i class="fa fa-trash-o"></i>
                                                    刪除
                                                </button>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="pagination_s">
                              <ul>
                                <li>
                                  <font @click='prev(), changeActive(-1)'>
                                    &lt;</font>
                                </li>
                                <li v-for="index in dataLength" :key='index' :class="{active: active==index}">
                                  <font @click='changePage(index), changeActive(index)' >{{index}}</font>        
                                </li>
                                <li>
                                  <font @click='next(), changeActive(-1)'>&gt;</font>
                                </li>
                              </ul>
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
      Datas: {},
      name: "後台人員列表",
      dataLength: 0,
      active: 1,
      pageStart: 0,
      countOfPage: 5
    };
  },
  computed: {
    filteredRows() {
      return Object.values(this.Datas).slice(
        this.pageStart,
        this.pageStart + this.countOfPage
      );
    }
  },
  methods: {
    prev() {
      this.pageStart = 0;
    },
    next() {
      this.pageStart =
        (Math.ceil(this.Datas.length / this.countOfPage) - 1) *
        this.countOfPage;
    },
    changeActive(index) {
      this.active = index;
    },
    changePage(index) {
      this.pageStart = (index - 1) * this.countOfPage;
    },
    deletes: function(num) {
      console.log(num);
      let formData = new FormData();
      formData.append("delete", "delete");
      formData.append("id", num);
      if (confirm("確定刪除此筆資料嗎")) {
        this.$axios
          .post("/connect/save/save-manager.php", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            if (response.data.status == "success") {
              alert("刪除成功");
              this.$router.go(0);
            }
          });
      }
    }
  },
  mounted: function() {},
  created() {
    const vm = this;
    let formData = new FormData();
    formData.append("get", "get");
    this.$axios
      .post("/connect/get/manager.php", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => {
        if (response.data.status == "error") {
          vm.Datas = {};
        } else {
          vm.Datas = response.data;
          this.dataLength = Math.ceil(this.Datas.length / this.countOfPage);
        }
      });
  }
};
</script>

<style lang='scss'>
</style>