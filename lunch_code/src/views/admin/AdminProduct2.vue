<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/product"/>
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
                                    <router-link style="color:#fff;margin-bottom:10px;" class="btn btn-info" :to="{name:'admin-product-kind'}">
                                        <i class="fa fa-edit"></i>
                                        分類編輯
                                    </router-link>
                                    <router-link style="color:#fff;margin-bottom:10px;margin-left: 10px;" class="btn btn-info" :to="{name:'admin-product-in',params:{id:'add'}}">
                                        <i class="fa fa-edit"></i>
                                        新增產品
                                    </router-link>
                                    <div class='box'>
                                        <label class='h6'>{{name}}分類</label>
                                        <select @change="selectkind1(layer1_selected)" v-model='layer1_selected'>
                                            <option disabled :selected="true">請選擇</option>
                                            <option v-for="(list, index) in productKindData" :key="index" :value="list.serial" :selected="layer1_selected">
                                                {{list.title}}
                                            </option>                                
                                        </select>
                                        <select style='margin:0 5px;' @change="selectkind2(layer1_selected,layer2_selected)" v-if="layer2_show" v-model='layer2_selected'>
                                            <option disabled :selected="true">請選擇</option>
                                            <option v-for="(list, index) in productKindData2" :key="index" :value="list.serial" :selected="layer2_selected">
                                                {{list.title}}
                                            </option>                                
                                        </select>
                                        <select style='margin:0 5px;' @change="selectkind3(layer1_selected,layer2_selected,layer3_selected)" v-if="layer3_show" v-model='layer3_selected'>
                                            <option disabled :selected="true">請選擇</option>
                                            <option v-for="(list, index) in productKindData3" :key="index" :value="list.serial" :selected="layer3_selected">
                                                {{list.title}}
                                            </option>                                
                                        </select>
                                        <select style='margin:0 5px;' v-if="layer4_show" v-model='layer4_selected'>
                                            <option disabled :selected="true">請選擇</option>
                                            <option v-for="(list, index) in productKindData4" :key="index" :value="list.serial" :selected="layer4_selected">
                                                {{list.title}}
                                            </option>                                
                                        </select>
                                        <button @click="selectProduct()" style='margin:0 10px;' class="btn btn-outline-dark" type="button">查詢</button>
                                    </div>
                                    <table class="table table-striped table-bordered datatable dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info" style="border-collapse: collapse !important">
                                        <tr role='row'>
                                            <th class="sorting" style="width: 150px;">No</th>
                                            <th class="sorting" style="width: 366px;">產品名稱</th>
                                            <th class="sorting" style="width: 150px;">操作</th>
                                        </tr>
                                        <tr v-for="(list, index) in layersData" :key="index">
                                            <td>{{index + 1}}</td>
                                            <td>{{list.title}}</td>
                                            <td>
                                                <router-link style='color:#fff' class="btn btn-info" :to="{name:'admin-product-in',params:{id:list.serial}}">
                                                    <i class="fa fa-edit"></i>
                                                    編輯
                                                </router-link>
                                                <button @click='deletes(list.serial)' style='margin:0 10px;' type='button' class="btn btn-danger">
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
      productData: {},
      productInData: {},
      name: "",
      layersData: {},
      productKindData: {},
      productKindData2: {},
      productKindData3: {},
      productKindData4: {},
      layer1_selected: "請選擇",
      layer2_selected: "請選擇",
      layer3_selected: "請選擇",
      layer4_selected: "請選擇",
      layer2_show: false,
      layer3_show: false,
      layer4_show: false
    };
  },
  methods: {
    deletes: function(num) {
      if (confirm("確定刪除此筆資料嗎")) {
        this.$axios
          .post("/connect/save/save-productin.php?id=" + num + "&delete=1")
          .then(response => {
            if (response.data.status == "success") {
              alert("刪除成功");
              this.$router.go(0);
            }
          });
      }
    },
    selectProduct: function() {
      const vm = this;
      if (vm.layer1_selected == "請選擇") {
        alert("請選擇分類");
        return;
      }
      if (vm.layer2_selected == "請選擇") {
        vm.layer2_selected = 0;
      }
      if (vm.layer3_selected == "請選擇") {
        vm.layer3_selected = 0;
      }
      if (vm.layer4_selected == "請選擇") {
        vm.layer4_selected = 0;
      }
      this.$axios
        .get(
          "/connect/get/layers.php?layer1=" +
            vm.layer1_selected +
            "&layer2=" +
            vm.layer2_selected +
            "&layer3=" +
            vm.layer3_selected +
            "&layer4=" +
            vm.layer4_selected,
          {}
        )
        .then(response => {
          if (response.data.status == "error") {
            this.layersData = {};
          } else {
            this.layersData = response.data;
            if (vm.layer2_selected == 0) {
              vm.layer2_selected = "請選擇";
            }
            if (vm.layer3_selected == 0) {
              vm.layer3_selected = "請選擇";
            }
            if (vm.layer4_selected == 0) {
              vm.layer4_selected = "請選擇";
            }
          }
        });
    },
    selectkind1: function(num) {
      this.$axios
        .get("/connect/get/product.php?layer1=" + num, {})
        .then(response => {
          if (response.data.status == "error") {
            this.productKindData2 = {};
            this.layer2_show = false;
          } else {
            this.productKindData2 = response.data;
            this.layer2_show = true;
          }
        });
    },
    selectkind2: function(num, num2) {
      this.$axios
        .get("/connect/get/product.php?layer1=" + num + "&layer2=" + num2, {})
        .then(response => {
          if (response.data.status == "error") {
            this.productKindData3 = {};
            this.productKindData4 = {};
            this.layer4_show = false;
            this.layer3_show = false;
            this.layer3_selected = "請選擇";
            this.layer4_selected = "請選擇";
          } else {
            this.productKindData3 = response.data;
            this.layer3_show = true;
          }
        });
    },
    selectkind3: function(num, num2, num3) {
      this.$axios
        .get(
          "/connect/get/product.php?layer1=" +
            num +
            "&layer2=" +
            num2 +
            "&layer3=" +
            num3,
          {}
        )
        .then(response => {
          if (response.data.status == "error") {
            this.productKindData4 = {};
            this.layer4_selected = "請選擇";
            this.layer4_show = false;
          } else {
            this.productKindData4 = response.data;
            this.layer4_show = true;
          }
        });
    }
  },
  mounted: function() {},
  created() {
    const vm = this;
    this.$axios.get("/connect/get/product.php", {}).then(response => {
      if (response.data.status == "error") {
        vm.productKindData = {};
      } else {
        vm.productKindData = response.data;
      }
    });
    this.$axios.get("/connect/get/options.php", {}).then(response => {
      this.name = response.data[2].name;
    });
  }
};
</script>