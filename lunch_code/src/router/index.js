import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import ProfileRouter from '../components/ProfileRouter.vue'
import News from '../views/News.vue'
import NewsIn from '../views/NewsIn.vue'
import NewsRouter from '../components/NewsRouter.vue'
import Product from '../views/Product.vue'
import ProductIn from '../views/ProductIn.vue'
import ProductRouter from '../components/ProductRouter.vue'
import Photo from '../views/Photo.vue'
import PhotoRouter from '../components/PhotoRouter.vue'
import Qa from '../views/Qa.vue'
import QaRouter from '../components/QaRouter.vue'
import Download from '../views/Download.vue'
import DownloadRouter from '../components/DownloadRouter.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Personal from '../views/Personal.vue'
import Privacy from '../views/Privacy.vue'
import Logout from '../views/Logout.vue'
import Order from '../views/Order.vue'
import Modify from '../views/Modify.vue'
import OrderList from '../views/OrderList.vue'

import ShopCar from '../views/ShopCar.vue'
import ShopCarNext from '../views/ShopCarNext.vue'
import ShopCarFinal from '../views/ShopCarFinal.vue'

import Admin from '../views/admin/Admin.vue'
import AdminLogin from '../views/admin/AdminLogin.vue'
import AdminSMTP from '../views/admin/AdminSMTP.vue'
import AdminIcon from '../views/admin/AdminIcon.vue'
import AdminCarousel from '../views/admin/AdminCarousel.vue'
import AdminCarouselIn from '../views/admin/AdminCarouselIn.vue'
import AdminIndex from '../views/admin/AdminIndex.vue'
import AdminOption from '../views/admin/AdminOption.vue'
import AdminProfile from '../views/admin/AdminProfile.vue'
import AdminNews from '../views/admin/AdminNews.vue'
import AdminNewsKind from '../views/admin/AdminNewsKind.vue'
import AdminNewsIn from '../views/admin/AdminNewsIn.vue'
import AdminProduct from '../views/admin/AdminProduct.vue'
import AdminProductKind from '../views/admin/AdminProductKind.vue'
import AdminProductKind2 from '../views/admin/AdminProductKind2.vue'
import AdminProductKind3 from '../views/admin/AdminProductKind3.vue'
import AdminProductKind4 from '../views/admin/AdminProductKind4.vue'
import AdminProductIn from '../views/admin/AdminProductIn.vue'
import AdminPhoto from '../views/admin/AdminPhoto.vue'
import AdminPhotoKind from '../views/admin/AdminPhotoKind.vue'
import AdminPhotoIn from '../views/admin/AdminPhotoIn.vue'
import AdminDownload from '../views/admin/AdminDownload.vue'
import AdminDownloadKind from '../views/admin/AdminDownloadKind.vue'
import AdminDownloadIn from '../views/admin/AdminDownloadIn.vue'
import AdminQa from '../views/admin/AdminQa.vue'
import AdminQaKind from '../views/admin/AdminQaKind.vue'
import AdminQaIn from '../views/admin/AdminQaIn.vue'
import AdminPrivacy from '../views/admin/AdminPrivacy.vue'
import AdminMember from '../views/admin/AdminMember.vue'
import AdminOrder from '../views/admin/AdminOrder.vue'
import AdminOrderIn from '../views/admin/AdminOrderIn.vue'
import AdminMetaOg from '../views/admin/AdminMetaOg.vue'
import AdminFreight from '../views/admin/AdminFreight.vue'
import AdminEmail from '../views/admin/AdminEmail.vue'
import AdminEmailIn from '../views/admin/AdminEmailIn.vue'
import AdminManager from '../views/admin/AdminManager.vue'
import AdminManagerIn from '../views/admin/AdminManagerIn.vue'
import AdminPay from '../views/admin/AdminPay.vue'
import AdminPayIn from '../views/admin/AdminPayIn.vue'
import AdminProfileIn from '../views/admin/AdminProfileIn.vue'
import AdminFooter from '../views/admin/AdminFooter.vue'
import AdminMemberIn from '../views/admin/AdminMemberIn.vue'
import AdminProductUploadImg from '../views/admin/AdminProductUploadImg.vue'

Vue.use(VueRouter);

const routes = [{
    path: '*',
    redirect: '/',
  }, {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/profile/:id?',
    component: Profile,
    children: [{
      path: '/profile/:id?',
      name: 'profile',
      component: ProfileRouter,
    }],
  }, {
    path: '/news/:id?',
    component: News,
    children: [{
      path: '/news/:id?',
      name: 'news',
      component: NewsRouter,
    }, {
      path: '/newsin/:id?',
      name: 'newsin',
      component: NewsIn,
    }],
  }, {
    path: '/product/:layer?/:id?',
    name: 'product',
    component: Product,
    children: [{
        path: '/product/:layer?/:id?',
        name: 'product',
        component: ProductRouter,
      },
      {
        path: '/product/:layer?/:id?',
        name: 'product',
        component: ProductRouter,
      },
      {
        path: '/product/:layer?/:id?',
        name: 'product',
        component: ProductRouter,
      },
      {
        path: '/product/:layer?/:id?',
        name: 'product',
        component: ProductRouter,
      }, {
        path: '/productin/:id?',
        name: 'productin',
        component: ProductIn,
      }
    ],
  }, {
    path: '/photo/:id?',
    component: Photo,
    children: [{
      path: '/photo/:id?',
      name: 'photo',
      component: PhotoRouter,
    }],
  }, {
    path: '/qa/:id?',
    component: Qa,
    children: [{
      path: '/qa/:id?',
      name: 'qa',
      component: QaRouter,
    }],
  }, {
    path: '/download/:id?',
    component: Download,
    children: [{
      path: '/download/:id?',
      name: 'download',
      component: DownloadRouter,
    }],
  }, {
    path: '/contact',
    name: 'contact',
    component: Contact
  }, {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/personal',
    name: 'personal',
    component: Personal
  }, {
    path: '/shopcar',
    name: 'shopcar',
    component: ShopCar
  }, {
    path: '/shopcarnext',
    name: 'shopcarnext',
    component: ShopCarNext
  }, {
    path: '/shopcarfinal',
    name: 'shopcarfinal',
    component: ShopCarFinal
  }, {
    path: '/privacy',
    name: 'privacy',
    component: Privacy
  }, {
    path: '/order',
    name: 'order',
    component: Order
  }, {
    path: '/modify',
    name: 'modify',
    component: Modify
  }, {
    path: '/orderlist/:id?',
    name: 'orderlist',
    component: OrderList
  }, {
    path: '/logout',
    name: 'logout',
    component: Logout
  }, {
    path: '/admin',
    name: 'admin',
    component: AdminLogin,
  }, {
    path: '/admin/option',
    component: Admin,
    children: [{
        path: '/',
        name: 'admin-option',
        component: AdminOption,
      }, {
        path: '/admin/option',
        name: 'adminoption',
        component: AdminOption
      }, {
        path: '/admin/index',
        name: 'admin-index',
        component: AdminIndex
      }, {
        path: '/admin/carousel',
        name: 'admin-carousel',
        component: AdminCarousel
      }, {
        path: '/admin/carousel/:id?',
        name: 'admin-carousel-in',
        component: AdminCarouselIn
      }, {
        path: '/admin/profile',
        name: 'admin-profile',
        component: AdminProfile
      }, {
        path: '/admin/profile/:id?',
        name: 'admin-profile-in',
        component: AdminProfileIn
      }, {
        path: '/admin/news',
        name: 'admin-news',
        component: AdminNews
      }, {
        path: '/admin/news/kind',
        name: 'admin-news-kind',
        component: AdminNewsKind
      }, {
        path: '/admin/news/:id?',
        name: 'admin-news-in',
        component: AdminNewsIn
      }, {
        path: '/admin/product',
        name: 'admin-product',
        component: AdminProduct
      }, {
        path: '/admin/product/kind',
        name: 'admin-product-kind',
        component: AdminProductKind
      }, {
        path: '/admin/product/kind/:id?',
        name: 'admin-product-kind2',
        component: AdminProductKind2
      },
      {
        path: '/admin/product/kind/:id?/:id2?',
        name: 'admin-product-kind3',
        component: AdminProductKind3
      },
      {
        path: '/admin/product/kind/:id?/:id2?/:id3?',
        name: 'admin-product-kind4',
        component: AdminProductKind4
      }, {
        path: '/admin/product/:id?',
        name: 'admin-product-in',
        component: AdminProductIn
      }, {
        path: '/admin/photo',
        name: 'admin-photo',
        component: AdminPhoto
      }, {
        path: '/admin/photo/kind',
        name: 'admin-photo-kind',
        component: AdminPhotoKind
      }, {
        path: '/admin/photo/:id?',
        name: 'admin-photo-in',
        component: AdminPhotoIn
      }, {
        path: '/admin/download',
        name: 'admin-download',
        component: AdminDownload
      }, {
        path: '/admin/download/kind',
        name: 'admin-download-kind',
        component: AdminDownloadKind
      }, {
        path: '/admin/download/:id?',
        name: 'admin-download-in',
        component: AdminDownloadIn
      }, {
        path: '/admin/qa',
        name: 'admin-qa',
        component: AdminQa
      }, {
        path: '/admin/qa/kind',
        name: 'admin-qa-kind',
        component: AdminQaKind
      }, {
        path: '/admin/qa/:id?',
        name: 'admin-qa-in',
        component: AdminQaIn
      }, {
        path: '/admin/member',
        name: 'admin-member',
        component: AdminMember
      }, {
        path: '/admin/privacy',
        name: 'admin-privacy',
        component: AdminPrivacy
      }, {
        path: '/admin/order',
        name: 'admin-order',
        component: AdminOrder
      }, {
        path: '/admin/order/:id?',
        name: 'admin-order-in',
        component: AdminOrderIn
      }, {
        path: '/admin/meta',
        name: 'admin-meta',
        component: AdminMetaOg
      }, {
        path: '/admin/pay',
        name: 'admin-pay',
        component: AdminPay
      }, {
        path: '/admin/payin/:id?',
        name: 'admin-pay-in',
        component: AdminPayIn
      }, {
        path: '/admin/freight',
        name: 'admin-freight',
        component: AdminFreight
      }, {
        path: '/admin/email',
        name: 'admin-email',
        component: AdminEmail
      }, {
        path: '/admin/emailin/:id?',
        name: 'admin-email-in',
        component: AdminEmailIn
      }, {
        path: '/admin/manager',
        name: 'admin-manager',
        component: AdminManager
      }, {
        path: '/admin/managerin/:id?',
        name: 'admin-manager-in',
        component: AdminManagerIn
      }, {
        path: '/admin/smtp/',
        name: 'admin-smtp',
        component: AdminSMTP
      }, {
        path: '/admin/icon/',
        name: 'admin-icon',
        component: AdminIcon
      }, {
        path: '/admin/footer/',
        name: 'admin-footer',
        component: AdminFooter
      }, {
        path: '/admin/uploadimg/',
        name: 'admin-product-uploadimg',
        component: AdminProductUploadImg
      }, {
        path: '/admin/memberin/:id?',
        name: 'admin-member-in',
        component: AdminMemberIn
      },
    ]
  }
  //  {
  //   path: '/admin/home',
  //   name: 'adminhome',
  //   component: Adminhome
  // }
]

const router = new VueRouter({
  routes,
  base: process.env.BASE_ENV === 'dev' ? '' : '',
  // base: process.env.BASE_ENV === 'dev' ? '/website/' : '/website/',
  // base: process.env.BASE_ENV === 'dev' ? '' : '/dist/',
  // mode: 'history',
})

export default router