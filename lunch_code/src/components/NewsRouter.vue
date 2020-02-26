<template>
  <div class='right'>
    <div class='title'>{{title}}</div>
    <div class='s-title'>{{s_title}}</div>
    <div class='news_upload'>
      <div class='news_list' v-for="(list, index)  in filteredRows" :key="index">
        <router-link :to="{name:'newsin',params:{id:list.serial}}">
          <div class='img'>
            <img v-if="list.image && list.image != 'null' && list.image != null && list.image != ''" :src="baseurl+'/connect/upload/news/'+list.image">
          </div>
          <div class='text'>
            <div class='text1'>{{list.title}}</div>
            <div class='text2'>{{list.s_title}}</div>
            <div class='text3'>{{list.create_time}}</div>
          </div>
        </router-link>
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
</template>

<script>
export default {
  name: "app",
  component: {},

  data() {
    return {
      baseurl: this.GLOBAL.BASE_URL,
      KindData: {}, //分類
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: "",
      ids: "",
      hi: "0",
      image: "",
      getData: "",
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
    getContainer(num) {
      this.$axios
        .get("/connect/get/news_in.php?kind=" + num, {})
        .then(response => {
          if (response.data.status == "error") {
            this.Datas = {};
          } else {
            this.Datas = response.data;
            this.dataLength = Math.ceil(this.Datas.length / this.countOfPage);
          }
        });
    }
  },
  // mounted: function() {},
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    vm.title = this.$route.params.title;
    vm.s_title = this.$route.params.s_title;

    if (typeof vm.ids === "undefined") {
      this.$axios.get("/connect/get/news.php", {}).then(response => {
        if (response.data.status == "error") {
          vm.KindData = {};
        } else {
          vm.KindData = response.data;
          vm.ids = vm.KindData[0].serial;
          vm.title = vm.KindData[0].title;
          vm.s_title = vm.KindData[0].s_title;
          vm.image = vm.KindData[0].image;
          this.getContainer(vm.ids);
        }
      });
    } else {
      this.getContainer(vm.ids);
    }
  }
};
</script>