<template>
    <div class="sidebar">
        <nav class="sidebar-nav">
          <ul class='navs'>
            <li @click='shows(1)' class='nav-title'>設定</li>   
            <li v-if='show == 1' class='nav-item'>
                <router-link class='nav-link' to="/admin/option"><i class="nav-icon icon-drop"></i>基本設定</router-link>
                <router-link class='nav-link' to="/admin/carousel"><i class="nav-icon icon-drop"></i>輪播圖片</router-link>
            </li>            
            <li @click='shows(2)' class='nav-title'>基本頁面設定</li>              
            <li v-if='show == 2' class='nav-item'>
                <router-link class='nav-link' to="/admin/index"><i class="nav-icon icon-drop"></i>首頁設定</router-link>
                <router-link class='nav-link' to="/admin/profile"><i class="nav-icon icon-drop"></i>公司簡介</router-link>
                <router-link class='nav-link' to="/admin/news"><i class="nav-icon icon-drop"></i>最新消息</router-link>
                <router-link class='nav-link' to="/admin/product"><i class="nav-icon icon-drop"></i>商品介紹</router-link>
                <router-link class='nav-link' to="/admin/photo"><i class="nav-icon icon-drop"></i>現場實景</router-link>
                <router-link class='nav-link' to="/admin/qa"><i class="nav-icon icon-drop"></i>常見問題</router-link>
                <router-link class='nav-link' to="/admin/download"><i class="nav-icon icon-drop"></i>檔案下載</router-link>
            </li>            
            
            <li @click='shows(10)' class='nav-title'>Footer設定</li>              
            <li v-if='show == 10' class='nav-item'>
                <router-link class='nav-link' to="/admin/footer"><i class="nav-icon icon-drop"></i>Footer設定</router-link>
            </li>   
            <li v-if='level==1' @click='shows(3)' class='nav-title'>會員管理</li>              
            <li v-if='show == 3' class='nav-item'>
              <router-link class='nav-link' to="/admin/member"><i class="nav-icon icon-drop"></i>會員列表</router-link>
              <router-link class='nav-link' to="/admin/privacy"><i class="nav-icon icon-drop"></i>同意個資&隱私權</router-link>
            </li>              
            <li v-if='level==1' @click='shows(4)' class='nav-title'>訂單管理</li>              
            <li v-if='show == 4' class='nav-item'>
              <router-link class='nav-link' to="/admin/order"><i class="nav-icon icon-drop"></i>訂單列表</router-link>
            </li>              
            <!-- <li class='nav-title'>社群ICON管理</li>  
            <li class='nav-item'>
              <router-link class='nav-link' to="/admin/icon"><i class="nav-icon icon-drop"></i>社群ICON管理</router-link>
            </li>  -->
            <li @click='shows(5)' class='nav-title'>Meta&OG設定</li>              
            <li v-if='show == 5' class='nav-item'>
              <router-link class='nav-link' to="/admin/meta"><i class="nav-icon icon-drop"></i>Meta&OG設定</router-link>
            </li>             
            <li @click='shows(6)' class='nav-title'>付款&運費設定</li>              
            <li v-if='show == 6' class='nav-item'>
              <router-link class='nav-link' to="/admin/pay"><i class="nav-icon icon-drop"></i>付款方式設定(非金流)</router-link>
              <router-link class='nav-link' to="/admin/freight"><i class="nav-icon icon-drop"></i>運費設定</router-link>
            </li>             
            <li @click='shows(7)' class='nav-title'>收件人Email設定</li>              
            <li v-if='show == 7' class='nav-item'>
              <router-link class='nav-link' to="/admin/email"><i class="nav-icon icon-drop"></i>收件人Email設定</router-link>
            </li>            
            <li v-if='level==1' @click='shows(8)' class='nav-title'>後台人員管理</li>              
            <li v-if='show == 8' class='nav-item'>
              <router-link class='nav-link' to="/admin/manager"><i class="nav-icon icon-drop"></i>後台人員列表</router-link>
            </li>            
            <li @click='shows(9)' class='nav-title'>SMTP設定</li>              
            <li v-if='show == 9' class='nav-item'>
              <router-link class='nav-link' to="/admin/smtp"><i class="nav-icon icon-drop"></i>SMTP設定</router-link>
            </li>            
          </ul>
      </nav>
    </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      show: 0,
      level: ""
    };
  },
  methods: {
    shows: function(index) {
      this.show = index;
    }
  },
  mounted: function() {},
  created() {
    this.level = this.$store.getters.getLevel;
  }
};
</script>
<style scoped>
.nav-title {
  cursor: pointer;
}
</style>
<style lang='scss'>
.lefts {
  position: fixed;
  z-index: 1019;
  width: 200px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0;
  color: #fff;
  background: #2f353a;
}
</style>