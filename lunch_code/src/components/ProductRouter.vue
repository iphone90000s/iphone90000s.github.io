<template>
  <div class='right'>
    <div class='title'>{{title}}</div>
    <div class='product_upload'>
      <div class='product_list'  v-for="(list, index) in filteredRows" :key="index">
        <router-link  :to="{name:'productin',params:{id:list.serial}}">
          <div class='img'>
            <img v-if='list.image' :src="baseurl+'/connect/upload/product/'+list.image">
          </div>
          <div class='text'>
            <div class='text1'>{{list.title}}</div>
            <div class='text2'>{{list.s_title}}</div>
            <!-- <div class='text3'>2016.03.03</div> -->
          </div>
        </router-link >
      </div>
    </div>
    <div class="pagination_s" >
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
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      baseurl: this.GLOBAL.BASE_URL,
      KindData: {}, //分類
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: "",
      ids: "",
      layer: "",
      getData: "",
      dataLength: 0,
      active: 1,
      pageStart: 0,
      countOfPage: 6
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
    }
  },
  // mounted: function() {},
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    vm.layer = this.$route.params.layer;

    vm.title = this.$route.params.title;
    vm.s_title = this.$route.params.s_title;

    if (typeof vm.ids === "undefined") {
      this.$axios
        .get("/connect/get/product_in.php?home=home&num=6", {})
        .then(response => {
          if (response.data.status == "error") {
            this.Datas = {};
          } else {
            this.Datas = response.data;
            this.dataLength = Math.ceil(this.Datas.length / this.countOfPage);
          }
        });
    } else {
      let formData = new FormData();
      formData.append("layer", vm.layer);
      formData.append("layer_num", vm.ids);
      this.$axios
        .post("/connect/get/product_in.php", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status == "error") {
            this.Datas = {};
          } else {
            this.Datas = response.data;
            this.dataLength = Math.ceil(this.Datas.length / this.countOfPage);
          }
        });
    }
  }
};
</script>