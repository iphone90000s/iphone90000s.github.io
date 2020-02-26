<template>
    <main class="main">
      <Bread :next-name="name" next-url="/admin/product"/>
      <div class="container-fluid">
        <div class="animated fadeIn">
            <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
                <!-- <input type='hidden' name='crsfvalue' v-model='token'> -->
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 新增產品
                    </div>
                    <div class="card-body">
                        <div class='box'>
                            <label class='h6'>選擇分類</label>
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
                        </div>
                        <div class='box'>
                            <label class='h6'>商品圖片</label>
                            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                        </div>
                        <div class='box' v-if="this.image">
                            <label class='h6'>目前已上傳圖片</label>
                            <img style='max-width:100px;' :src="baseurl+'/connect/upload/product/'+this.image">
                        </div>
                        <div class='box'>
                            <label class='h6'>標題</label>
                            <input type='text' v-model='title'>
                        </div>
                        <div class='box'>
                            <label class='h6'>副標題</label>
                            <input type='text' v-model='s_title'>
                        </div>
                        <div class='box'>
                            <label class='h6'>內文</label>
                             <ckeditor v-model="content" :config="config"></ckeditor>
                        </div>
                        <div class='box'>
                            <label class='h6'>原價</label>
                            <input type='number' v-model='price'>
                        </div>
                        <div class='wrong' v-if="priceError">
                          原價不得為0
                        </div>
                        <div class='box'>
                            <label class='h6'>優惠價</label>
                            <input type='number' v-model='new_price'>
                        </div>
                        <div class='wrong' v-if="newPriceError">
                          優惠價須低於原價且不得為0
                        </div>
                        <div class='box'>
                            <label class='h6'>目前庫存</label>
                            <input type='number' v-model='reserve'>
                        </div>
                        <div class='wrong' v-if="reserveError">
                          庫存不得為0
                        </div>
                        <div class='box'>
                            <label class='h6'>安全庫存</label>
                            <input type='number' v-model='savetystock'>
                            <span class='wrong'>若不需要使用安全庫存功能，則設0即可</span>
                        </div>
                        <div class='box'>
                            <label class='h6'>贈品</label>
                             <ckeditor v-model="gift" :config="config"></ckeditor>
                        </div>
                        <div class='box'>
                            <label class='h6'>上架/下架</label>
                            <select v-model='takeoff'>
                              <option :value='0' :selected='takeoff'>上架</option>   
                              <option :value='1' :selected='takeoff'>下架</option>
                            </select>
                        </div>
                        <div class='box'>
                            <label class='h6'>排序</label>
                            <input type='number' v-model='sort'>
                            <font class='require'>數字越小排越前面</font>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 自訂規格一
                    </div>
                    <div class="card-body">
                      <div class='box'>
                          <label class='h6'>自訂規格一標題</label>
                          <input type='text' v-model='other1.title'>
                      </div>
                      <button type='button' @click='addOther1()' class="btn btn-info">
                          新增
                      </button>
                      <div class='box' v-for="(list, index) in other1.datas" :key="index">
                          <label class='h6'>規格</label>
                          <input type='text' v-model="other1.datas[index]">
                          <button style='margin-left:10px;' type='button' @click='deleteOther1(index)' class="btn btn-danger">
                            刪除
                        </button>
                      </div>   
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <i class="icon-drop"></i> 自訂規格二
                    </div>
                    <div class="card-body">
                      <div class='box'>
                          <label class='h6'>自訂規格二標題</label>
                          <input type='text' v-model='other2.title'>
                      </div>
                      <button type='button' @click='addOther2()' class="btn btn-info">
                          新增
                      </button>
                      <div class='box' v-for="(list, index) in other2.datas" :key="index">
                          <label class='h6'>規格</label>
                          <input type='text' v-model="other2.datas[index]">
                          <button style='margin-left:10px;' type='button' @click='deleteOther2(index)' class="btn btn-danger">
                            刪除
                        </button>
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
import Ckeditor from "vue-ckeditor2";
export default {
  name: "app",
  components: {
    Bread,
    Ckeditor
  },
  data() {
    return {
      other1: {
        title: "",
        datas: {
          value1: ""
        }
      },
      other2: {
        title: "",
        datas: { value1: "" }
      },
      baseurl: this.GLOBAL.BASE_URL,
      editData: "",
      newData: "",
      newData2: "",
      ids: "",
      layer1_selected: "請選擇",
      layer2_selected: "請選擇",
      layer3_selected: "請選擇",
      layer4_selected: "請選擇",
      layer2_show: false,
      layer3_show: false,
      layer4_show: false,
      productInData: {},
      productKindData: {},
      productKindData2: {},
      productKindData3: {},
      productKindData4: {},
      title: "",
      s_title: "",
      content: "",
      name: "",
      gift: "", //贈品
      reserve: 999, //庫存
      savetystock: 0, //安全庫存
      price: 0, //原價
      new_price: 0, //優惠價
      takeoff: "", //下架
      image: "",
      file: "",
      sort: 0,
      haspic: false,
      totalCheck: false,
      priceError: false,
      savetystockError: false,
      reserveError: false,
      newPriceError: false
    };
  },
  computed: {
    config() {
      return this.$store.getters.getConfig;
    }
  },
  methods: {
    addOther1() {
      let vm = this;
      let date = new Date().getTime();
      const values = `value${date}`;
      vm.$set(vm.other1.datas, values, "");
    },
    deleteOther1(obj) {
      let vm = this;
      vm.$delete(vm.other1.datas, obj);
    },
    addOther2() {
      let vm = this;
      let date = new Date().getTime();
      const values = `value${date}`;
      vm.$set(vm.other2.datas, values, "");
    },
    deleteOther2(obj) {
      let vm = this;
      vm.$delete(vm.other2.datas, obj);
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
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
    },
    checkForm: function() {
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

      if (this.price == 0) {
        this.priceError = true;
        this.totalCheck = false;
      } else {
        this.priceError = false;
        this.totalCheck = true;
      }

      if (
        parseInt(this.new_price) < parseInt(this.price) &&
        this.new_price != 0
      ) {
        this.newPriceError = false;
        this.totalCheck = true;
      } else {
        this.newPriceError = true;
        this.totalCheck = false;
      }

      if (this.reserve == 0) {
        this.reserveError = true;
        this.totalCheck = false;
      } else {
        this.reserveError = false;
        this.totalCheck = true;
      }

      if (this.totalCheck) {
        vm.ids = this.$route.params.id;
        let formData = new FormData();
        if (this.file != null) {
          formData.append("file", this.file);
        }
        formData.append("title", vm.title);
        formData.append("s_title", vm.s_title);
        formData.append("layer1", vm.layer1_selected);
        formData.append("layer2", vm.layer2_selected);
        formData.append("layer3", vm.layer3_selected);
        formData.append("layer4", vm.layer4_selected);
        formData.append("content", vm.content);
        formData.append("gift", vm.gift);
        formData.append("price", vm.price);
        formData.append("new_price", vm.new_price);
        formData.append("reserve", vm.reserve);
        formData.append("savetystock", vm.savetystock);
        formData.append("takeoff", vm.takeoff);
        formData.append("image", vm.image);
        formData.append("sort", vm.sort);

        const other1 = JSON.stringify(vm.other1);
        const other2 = JSON.stringify(vm.other2);
        formData.append("other1", other1);
        formData.append("other2", other2);
        this.$axios
          .post("/connect/save/save-productin.php?id=" + vm.ids, formData, {
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
    }
  },
  mounted: function() {},
  created() {
    const vm = this;
    //找出分類
    this.$axios.get("/connect/get/product.php", {}).then(response => {
      if (response.data.status == "error") {
        vm.productKindData = {};
      } else {
        vm.productKindData = response.data;
      }
    });

    this.$axios.get("/connect/get/options.php", {}).then(response => {
      vm.name = response.data[2].name;
    });

    this.ids = this.$route.params.id;
    //找出產品
    if (this.ids != "add") {
      this.$axios
        .get("/connect/get/goods.php?id=" + this.ids, {})
        .then(response => {
          vm.layer1_selected = response.data[0].layer1;
          vm.layer2_selected = response.data[0].layer2;
          vm.layer3_selected = response.data[0].layer3;
          vm.layer4_selected = response.data[0].layer4;
          vm.title = response.data[0].title;
          vm.s_title = response.data[0].s_title;
          vm.content = response.data[0].content;
          vm.gift = response.data[0].gift;
          vm.reserve = response.data[0].reserve;
          vm.savetystock = response.data[0].savetystock;
          vm.price = response.data[0].price;
          vm.new_price = response.data[0].new_price;
          // vm.newData.setData(response.data[0].content);
          // vm.newData2.setData(response.data[0].gift);
          vm.takeoff = response.data[0].takeoff;
          vm.image = response.data[0].image;
          vm.sort = response.data[0].sort;

          if (response.data[0].other1 != "") {
            vm.other1 = JSON.parse(response.data[0].other1);
          }
          if (response.data[0].other2 != "") {
            vm.other2 = JSON.parse(response.data[0].other2);
          }
        });
    }
  }
};
</script>

<style lang='scss'>
</style>