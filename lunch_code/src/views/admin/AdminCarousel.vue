<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/carousel"/>
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
                                    <router-link style="color:#fff;margin-bottom:10px;" class="btn btn-info" :to="{name:'admin-carousel-in',params:{id:'add'}}">
                                        <i class="fa fa-edit"></i>
                                        新增圖片
                                    </router-link>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 150px;">No</th>
                                            <th class="sorting" style="width: 366px;">圖片</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in carouselData" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td><img style='max-width:100px;' :src="baseurl+'/connect/upload/carousel/'+list.image"></td>
                                            <td>
                                                <button  type='button' @click='deletes(list.serial)' class="btn btn-danger">
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
      baseurl: this.GLOBAL.BASE_URL,
      carouselData: {},
      name: "輪播圖片"
    };
  },
  methods: {
    deletes: function(num) {
      if (confirm("確定刪除此筆資料嗎")) {
        this.$axios
          .post("/connect/save/save-carousel.php?id=" + num + "&delete=1")
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
    this.$axios.get("/connect/get/carousel.php", {}).then(response => {
      if (response.data.status == "error") {
        vm.carouselData = {};
      } else {
        vm.carouselData = response.data;
      }
    });
  }
};
</script>

<style lang='scss'>
</style>