import Vue from 'vue'
import VueRouter from 'vue-router'

import Order from "../components/Order.vue";
import Ricebox from '../components/ricebox.vue';
import Drink from '../components/drink.vue';
import App from '../components/app.vue';
import Index from '../components/index.vue';
Vue.use(VueRouter);

const routes = [{
   path: '*',
   redirect: '/',
}, {
   path: '/',
   name: 'index',
   component: Index,
   children: [{
         path: '/ricebox/',
         name: 'ricebox',
         component: Ricebox,
      },
      {
         path: '/drink/',
         name: 'drink',
         component: Drink,
      }
   ]
}, {
   path: '/order',
   name: 'order',
   component: Order
}, ]
const router = new VueRouter({
   routes,
   base: process.env.BASE_ENV === 'dev' ? '' : '',
   // mode: 'history',
});

export default router