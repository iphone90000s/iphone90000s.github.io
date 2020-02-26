<template> 
  <div class='app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show'>
    <header class='app-header navbar'>
      <router-link class='navbar-brand' to="/admin/option">    
        <img :src="baseurl+'/connect/upload/ogimage/logo.png'">  
      </router-link>
      <router-link to="/logout" class='breadcrumb-item active'>登出</router-link>
    </header>
    <div class='app-body'>
      <Adminlist/>
      <router-view></router-view> 
    </div>    
  </div>
</template>

<script>
import Adminlist from "../../components/adminlist.vue";
export default {
  name: "app",
  components: { Adminlist },
  data() {
    return {
      layer1: "",
      layer2: "",
      layer3: "",
      baseurl: this.GLOBAL.BASE_URL
    };
  },
  methods: {},
  mounted: function() {}
};
</script>

<style scoped src='@/assets/css/login.css'></style>
<style src='@/assets/css/bootstrap.css'></style>
<style src='@/assets/css/adminstyle.css'></style>
<style>
.ck-editor {
  border-radius: 10px;
  border: 1px solid #888;
  width: calc(100% - 165px);
  padding: 5px;
  display: inline-block;
}
.ck-content {
  min-height: 250px;
}
.table td a {
  margin: 0 5px;
}
.container-fluid {
  background-color: #e4e5e6;
}
main.main {
  background-color: #e4e5e6;
}
</style>
<style lang='scss'>
.navbar-brand {
  img {
    max-width: 200px;
  }
}
.header-fixed .app-header {
  padding: 0 15px;
}
.outside {
  display: -ms-flexbox;
  display: flex;
  padding-top: 40px;
  padding-bottom: 40px;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f5f5f5;
  min-height: 100vh;
  text-align: center;
}
</style>
<style>
.header-fixed + .fixeds,
.admins + .fixeds {
  display: none;
}
</style>