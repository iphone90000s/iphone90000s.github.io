<template>
    <div class="main-content">
        <topmenu></topmenu>        
        <div class='inner-page'>
          <div class='banner block'>
            <img src='@/assets/img/in_Top.png'>
            <div class='banner_text'>
              <div class='text1'>數位化專業團隊．提供企業解決方案</div>
              <div class='text2'>FAQ</div>
            </div>
          </div>
          <div class='contents block'>
            <div class='left'>
              <div class='title'>常見問題</div>
              <div class='en_title'>FAQ</div>
              <ul>
                <li v-for="(list, index) in KindData" :key="index">
                  <router-link :to="{name:'qa',params:{id:list.serial,title:list.title,s_title:list.s_title}}">{{list.title}}</router-link>
                </li>
              </ul>
            </div>
            <router-view :key="key"></router-view>
          </div>
        </div>
        <Footer></Footer>    
    </div>
</template>

<script>
import Topmenu from "../components/topmenu.vue";
import Footer from "../components/footer.vue";
export default {
  name: "app",
  components: {
    Topmenu,
    Footer
  },
  data() {
    return {
      KindData: {}, //分類
      Datas: {}, //消息內容
      title: "",
      s_title: "",
      content: ""
    };
  },

  methods: {},
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  },
  created() {
    const vm = this;
    vm.ids = this.$route.params.id;
    this.$axios.get("/connect/get/qa.php", {}).then(response => {
      //找分類
      if (response.data.status == "error") {
        vm.KindData = {};
      } else {
        vm.KindData = response.data;
      }
    });
  }
};
</script>