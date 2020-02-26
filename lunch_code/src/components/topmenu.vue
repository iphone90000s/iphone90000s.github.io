<template>
  <div class='tops block'>
    <div class='logo' v-if='getLogo'>
      <router-link to="/"><img :src="baseurl+'/connect/upload/ogimage/logo.png'"></router-link>
    </div>
    <div class='hambuger' @click='slideMenu()'>
      <div class='hambuger-in'>
        <span class='span1'></span>
        <span class='span2'></span>
        <span class='span3'></span>
      </div>
    </div>
    <transition name="fade">
      <div :class="{active: menu == true}" class='menus'>      
        <ul>
          <li v-if="getOption.profilePick == '0'">
            <router-link :to="{name:'profile'}">{{getOption.profile}}</router-link>
          </li>
          <li v-if="getOption.newsPick  == '0'">
            <router-link to="/news">{{getOption.news}}</router-link>
          </li>
          <li v-if="getOption.productPick  == '0'">
            <router-link to="/product">{{getOption.product}}</router-link>
          </li>
          <li v-if="getOption.photoPick  == '0'">
            <router-link to="/photo">{{getOption.photo}}</router-link>
          </li>
          <li v-if="getOption.qaPick  == '0'">
            <router-link to="/qa">{{getOption.qa}}</router-link>
          </li>
          <li v-if="getOption.downloadPick  == '0'">
            <router-link to="/download">{{getOption.download}}</router-link>
          </li>
          <li v-if="getOption.contactPick  == '0'">
            <router-link to="/contact">{{getOption.contact}}</router-link>
          </li>        
          <li v-if="getOption.loginPick  == '0' && logins == 0">
            <router-link to="/login">{{getOption.login}}</router-link>
          </li>
          <li v-if="cookie != null ">
            <router-link  to="/order">訂單列表</router-link>
          </li>
          <li v-if="cookie != null">
            <router-link to="/logout">登出</router-link>
          </li>
        </ul>
      </div> 
    </transition>     
    <div v-html='html'></div>
    <!-- <div class="GoogleSearch">
      <gcse:searchbox-only></gcse:searchbox-only>
    </div>        -->
  </div>    
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      baseurl: this.GLOBAL.BASE_URL,
      cookie: null,
      logins: 0,
      menu: false,
      html: ""
    };
  },
  computed: {
    getLogo() {
      return this.$store.getters.getLogo;
    },
    apiDataFetchSuccess() {
      return this.$store.getters.getCheckLoing;
    },
    getOption() {
      return this.$store.getters.getOption;
    }
  },
  methods: {
    slideMenu() {
      this.menu = !this.menu;
    },
    checkToken() {
      this.$store.dispatch("checkLoging", this.$cookies.get("status"));
      if (this.$store.getters.getCheckLoing) {
        this.cookie = this.$cookies.get("status");
        this.cookie = true;
        this.logins = 1;
      }
    },
    createScript() {
      this.html = "<gcse:search></gsce:search>";
      var cx = "002411145378177395461:qq5r3tzewdk";
      var gcse = document.createElement("script");
      gcse.id = "google-search";
      gcse.type = "text/javascript";
      gcse.async = true;
      gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(gcse, s);
    }
  },
  mounted: function() {
    this.checkToken();
    this.createScript();
    (function() {
      // var cx = "002411145378177395461:qq5r3tzewdk";
      // var gcse = document.createElement("script");
      // gcse.type = "text/javascript";
      // gcse.async = true;
      // gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
      // var s = document.getElementsByTagName("script")[0];
      // s.parentNode.insertBefore(gcse, s);
    })();
  }
};
</script>