import '../sass/style.scss';
import Vue from 'vue';
import Vuex from 'vuex'
import App from '../components/app.vue';
import router from './router.js';
import store from '../store'
Vue.use(Vuex)
// var app = new Vue({
//       el: "#app",
//       components: {
//             App
//       },
// })

new Vue({
      router,
      store,
      render: h => h(App)
}).$mount('#app')