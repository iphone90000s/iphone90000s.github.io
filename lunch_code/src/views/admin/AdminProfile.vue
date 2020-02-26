<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/profile"/>
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
                                    <router-link style="color:#fff;margin-bottom:10px;" class="btn btn-info" :to="{name:'admin-profile-in',params:{id:'add'}}">
                                        <i class="fa fa-edit"></i>
                                        新增
                                    </router-link>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 150px;">No</th>
                                            <th class="sorting" style="width: 366px;">標題</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in profileData" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>{{list.title}}</td>
                                            <td>
                                                <router-link style="color:#fff" class='btn btn-info' :to="{name:'admin-profile-in',params:{id:list.serial}}"><i class="fa fa-edit"></i>編輯</router-link>

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
      profileData: {},
      name: ""
    };
  },
  methods: {
    deletes: function(num) {
      if (confirm("確定刪除此筆資料嗎")) {
        this.$axios
          .post("/connect/save/save-profile.php?id=" + num + "&delete=1")
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
    this.$axios.get("/connect/get/profile.php", {}).then(response => {
      if (response.data.status == "error") {
        vm.profileData = {};
      } else {
        vm.profileData = response.data;
      }
    });
    this.$axios.get("/connect/get/options.php", {}).then(response => {
      this.name = response.data[0].name;
    });
  }
};
</script>

<style lang='scss'>
</style>