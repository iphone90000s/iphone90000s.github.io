<template>
  <main class="main">
    <Bread next-name="運費設定" next-url="/admin/freight"/>
    <div class="container-fluid">
      <div class="animated fadeIn">
          <form ref="form" enctype="multipart/form-data" autocomplete="off" method="post" action="" name="submitform">
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 運費方式
                  </div>
                  <div class="card-body">
                      <div class='box'>
                          <label class='h6'>選擇運費方式</label>
                          <select @change='selectFreight()' v-model='selected'>
                              <option disabled :selected="true">請選擇</option>
                              <option :selected="selected == '1'" value='1'>滿額免運</option>
                              <option :selected="selected == '2'" value='2'>區間運費</option>
                          </select>
                      </div>
                  </div>
              </div> 
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 滿額免運
                  </div>
                  <div class="card-body">
                      <div class='box'>
                        <label class='h6'>運費金額</label>
                        <input type='text' class='shorts' v-model="freight" name='freight'>
                      </div>
                      <div class='box'>
                          <label class='h6'>金額滿多少免運費</label>
                          <input type='text' class='shorts' v-model="full" name='full'>
                      </div>
                  </div>
              </div>    
              <div class="card">
                  <div class="card-header">
                      <i class="icon-drop"></i> 區間運費
                  </div>
                  <div class="card-body">
                      <div class='box'>
                        <label class='h6'>運費金額</label>
                        <input type='text' class='shorts' v-model="blocks.money1" name='profile'>
                      </div>
                      <div class='box'>
                          <label class='h6'>金額區間</label>
                          <input type='text' class='shorts' v-model="blocks.interval1_1" name='profile'>
                          ~
                          <input type='text' class='shorts' v-model="blocks.interval1_2" name='profile'>
                      </div>
                      <hr>
                      <div class='box'>
                        <label class='h6'>運費金額</label>
                        <input type='text' class='shorts' v-model="blocks.money2" name='profile'>
                      </div>
                      <div class='box'>
                          <label class='h6'>金額區間</label>
                          <input type='text' class='shorts' v-model="blocks.interval2_1" name='profile'>
                          ~
                          <input type='text' class='shorts' v-model="blocks.interval2_2" name='profile'>
                      </div>
                      <hr>
                      <div class='box'>
                        <label class='h6'>運費金額</label>
                        <input type='text' class='shorts' v-model="blocks.money3" name='profile'>
                      </div>
                      <div class='box'>
                          <label class='h6'>金額區間</label>
                          <input type='text' class='shorts' v-model="blocks.interval3_1" name='profile'>
                          ~
                          <input type='text' class='shorts' v-model="blocks.interval3_2" name='profile'>
                      </div>
                      <hr>
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
export default {
  name: "app",
  components: {
    Bread
  },
  data() {
    return {
      freight: "",
      full: "",
      selected: "請選擇",
      freightData: {},
      blocks: {
        money1: "",
        interval1_1: "",
        interval1_2: "",
        money2: "",
        interval2_1: "",
        interval2_2: "",
        money3: "",
        interval3_1: "",
        interval3_2: ""
      }
    };
  },
  methods: {
    checkForm: function() {
      var json = JSON.stringify(this.blocks);
      let formData = new FormData();
      formData.append("selected", this.selected);
      formData.append("freight", this.freight);
      formData.append("full", this.full);
      formData.append("blocks", json);
      this.$axios
        .post("/connect/save/save-freight.php", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status == "success") {
            alert("資料送出成功");
            this.$router.go(0);
          }
        });
    }
  },
  mounted: function() {},
  created() {
    const vm = this;
    this.$axios.get("/connect/get/freight.php", {}).then(response => {
      if (response.data.status == "error") {
        vm.freightData = {};
      } else {
        vm.freight = response.data[0].freight;
        vm.full = response.data[0].full;
        vm.selected = response.data[0].selected;
        vm.blocks = response.data[0].blocks;
        vm.blocks = JSON.parse(vm.blocks);
      }
    });
  }
};
</script>

<style lang='scss'>
</style>