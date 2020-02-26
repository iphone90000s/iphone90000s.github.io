import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'
import store from './store'
import VueMeta from 'vue-meta';


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import 'vue-pure-lightbox/dist/VuePureLightbox.css'
import '@/assets/css/slick.css'
import '@/assets/css/slick-theme.css'
import '@/assets/css/coreui.css'
import '@/assets/sass/style.scss'
import router from './router'
import $ from 'jquery'

import Print from 'vue-print-nb'

import global from '@/components/Base.vue';

Vue.use(Print)
Vue.use(VueCookies)
Vue.use(Vuex)
Vue.use(VueMeta)
// export default store
Vue.prototype.$axios = axios;
Vue.prototype.$ = $;
Vue.config.productionTip = false;
Vue.prototype.GLOBAL = global;

// axios.defaults.baseURL = '/website/';
// axios.defaults.baseURL = global.BASE_URL;

router.beforeEach((to, from, next) => {
  const newpath = '/admin/';
  if (to.path.indexOf(newpath) > -1) {
    // let token = window.localStorage.token;
    if (router.app.$cookies.get("status") !== "logined") {
      next('/admin');
    } else {
      next();
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')