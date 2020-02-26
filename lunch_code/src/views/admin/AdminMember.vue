<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/member"/>
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
                                    <div class='box'>
                                      <label>搜尋</label>
                                      <input type='text' v-model='search' placeholder="請輸入帳號、姓名、電話">
                                      <button type='button' @click='searchs()' style='margin:0 10px;' class="btn btn-success">
                                          查詢
                                      </button>
                                    </div>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 150px;">No</th>
                                            <th class="sorting" style="width: 156px;">帳號</th>
                                            <th class="sorting" style="width: 150px;">姓名</th>
                                            <th class="sorting" style="width: 150px;">電話</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in filteredRows" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>{{list.account}}</td>
                                            <td>{{list.name}}</td>
                                            <td>{{list.phone}}</td>
                                            <td>
                                                <router-link style="color:#fff" class='btn btn-info' :to="{name:'admin-member-in',params:{id:list.serial}}"><i class="fa fa-edit"></i>編輯</router-link>

                                                <button type='button' @click='deletes(list.serial)' class="btn btn-danger">
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
      show: -1,
      selected: "請選擇",
      Datas: {},
      name: "會員列表",
      dataLength: 0,
      active: 1,
      pageStart: 0,
      countOfPage: 5,
      search: ""
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
    searchs() {
      if (this.search == "") {
        alert("請輸入搜尋條件");
        return;
      } else {
        let formData = new FormData();
        formData.append("search", this.search);
        this.$axios
          .post("/connect/get/member.php", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
          .then(response => {
            if (response.data.status != "error") {
              this.Datas = response.data;
              this.dataLength = Math.ceil(this.Datas.length / this.countOfPage);
            }
          });
      }
    },
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
      if (confirm("確定刪除此筆資料嗎")) {
        this.$axios
          .post("/connect/save/save-member.php?id=" + num + "&delete=1")
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
    this.$axios.get("/connect/get/member.php", {}).then(response => {
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