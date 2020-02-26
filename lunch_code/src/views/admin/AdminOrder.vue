<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/order"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 匯出月報表
                    </div>
                    <div class="card-body">
                      <div class='box'>
                        <select v-model='year'>
                          <option v-for="item in years" :key='item'>{{item.year}}</option>
                        </select>
                        <select style='margin-left:5px;' v-mode='month'>
                          <option v-for="n in 12" :key='n'>{{n}}</option>
                        </select>
                        <a :href="'/connect/excel/exportYear.php?year='+year+'&month='+month" style="color:#fff;margin-bottom:10px;margin-left: 10px;" class="btn btn-success">
                            匯出
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 匯出年報表
                    </div>
                    <div class="card-body">
                       <select v-model='year2'>
                          <option v-for="item in years" :key='item'>{{item.year}}</option>
                        </select>

                        <a :href="'/connect/excel/exportYear2.php?year2='+year2" @click='exportYear()' style="color:#fff;margin-bottom:10px;margin-left: 10px;" class="btn btn-success">
                            匯出
                        </a>
                    </div>
                  </div>
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
                                      <input type='text' v-model='search' placeholder="請輸入訂單編號、電話、出貨狀態">
                                      <button type='button' @click='searchs()' style='margin:0 10px;' class="btn btn-success">
                                          查詢
                                      </button>
                                    </div>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 150px;">訂單編號</th>
                                            <th class="sorting" style="width: 150px;">會員姓名</th>
                                            <th class="sorting" style="width: 150px;">收貨人姓名</th>
                                            <th class="sorting" style="width: 150px;">訂單日期</th>
                                            <th class="sorting" style="width: 150px;">收貨人電話</th>
                                            <th class="sorting" style="width: 200px;">收貨人地址</th>
                                            <th class="sorting" style="width: 150px;">出貨狀態</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in filteredRows" :key="index">
                                            <td>{{list.order_id}}</td>
                                            <td>{{list.buy_name}}</td>
                                            <td>{{list.get_name}}</td>
                                            <td>{{list.create_time}}</td>
                                            <td>{{list.get_phone}}</td>
                                            <td>{{list.addr}}</td>
                                            <td>{{list.status}}</td>
                                            <td>
                                                <router-link style="color:#fff" class='btn btn-info' :to="{name:'admin-order-in',params:{id:list.serial}}"><i class="fa fa-edit"></i>編輯</router-link>
                                                <button type='button' @click='deletes(list.serial)' class="btn btn-danger">
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
      name: "訂單列表",
      dataLength: 0,
      active: 1,
      pageStart: 0,
      countOfPage: 5,
      search: "",
      years: [
        { year: 2019 },
        { year: 2020 },
        { year: 2021 },
        { year: 2022 },
        { year: 2023 }
      ],
      year: 2020,
      month: 1,
      year2: 2020
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
    exportYear() {
      let formData = new FormData();
      formData.append("year2", this.year2);
      this.$axios
        .post("/connect/excel/exportYear.php", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status != "error") {
            console.log("1");
            // this.Datas = response.data;
            // this.dataLength = Math.ceil(this.Datas.length / this.countOfPage);
          }
        });
    },
    searchs() {
      if (this.search == "") {
        alert("請輸入搜尋條件");
        return;
      } else {
        let formData = new FormData();
        formData.append("search", this.search);
        this.$axios
          .post("/connect/get/order.php", formData, {
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
          .post("/connect/save/save-order.php?id=" + num + "&delete=1")
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
    this.$axios.get("/connect/get/order.php", {}).then(response => {
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