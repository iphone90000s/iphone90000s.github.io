<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/email"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                  <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 聯絡我們 - {{name}}
                    </div>
                    <div class="card-body">
                        <div class='dataTables_wrapper dt-bootstrap4 no-footer'>
                            <div class='row'>
                                <div class='col-sm-12'>
                                    <router-link style="color:#fff;margin-bottom:10px;" class="btn btn-info" :to="{name:'admin-email-in',params:{id:'add',kind:1}}">
                                        <i class="fa fa-edit"></i>
                                        新增
                                    </router-link>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 150px;">No</th>
                                            <th class="sorting" style="width: 150px;">名稱</th>
                                            <th class="sorting" style="width: 150px;">email</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in Datas" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>{{list.name}}</td>
                                            <td>{{list.email}}</td>
                                            <td>
                                                <router-link style="color:#fff" class='btn btn-info' :to="{name:'admin-email-in',params:{id:list.serial,kind:1}}"><i class="fa fa-edit"></i>編輯</router-link>
                                                <button @click='deletes(list.serial)' style='margin:0 10px;' type='button' class="btn btn-danger">
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
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 訂單相關通知 - {{name}}
                    </div>
                    <div class="card-body">
                        <div class='dataTables_wrapper dt-bootstrap4 no-footer'>
                            <div class='row'>
                                <div class='col-sm-12'>
                                    <router-link style="color:#fff;margin-bottom:10px;" class="btn btn-info" :to="{name:'admin-email-in',params:{id:'add',kind:2}}">
                                        <i class="fa fa-edit"></i>
                                        新增
                                    </router-link>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 150px;">No</th>
                                            <th class="sorting" style="width: 150px;">名稱</th>
                                            <th class="sorting" style="width: 150px;">email</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in Datas2" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>{{list.name}}</td>
                                            <td>{{list.email}}</td>
                                            <td>
                                                <router-link style="color:#fff" class='btn btn-info' :to="{name:'admin-email-in',params:{id:list.serial,kind:2}}"><i class="fa fa-edit"></i>編輯</router-link>
                                                <button @click='deletes(list.serial)' style='margin:0 10px;' type='button' class="btn btn-danger">
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
      Datas2: {},
      name: "收件人Email設定",
      dataLength: 0,
      dataLength2: 0,
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
      if (confirm("確定刪除此筆資料嗎")) {
        this.$axios
          .post("/connect/save/save-email.php?id=" + num + "&delete=1")
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
    this.$axios.get("/connect/get/email.php?kind=1", {}).then(response => {
      if (response.data.status != "error") {
        vm.Datas = response.data;
        this.dataLength = Math.ceil(this.Datas.length / this.countOfPage);
      }
    });
    this.$axios.get("/connect/get/email.php?kind=2", {}).then(response => {
      if (response.data.status != "error") {
        vm.Datas2 = response.data;
        this.dataLength2 = Math.ceil(this.Datas2.length / this.countOfPage);
      }
    });
  }
};
</script>

<style lang='scss'>
</style>