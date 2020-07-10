import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PageNotFound from './views/PageNotFound'
import tel from './views/pdf/tel'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/',  name: 'home', component: Home },
    { path: '/tel.pdf',  name: 'tel', component: tel },
    { path: '/about', name: 'about',  component: () => import('./views/About.vue') },

    { path: '/register', name: 'adminregister' , component: () => import('./views/admin/Register.vue') , meta: { auth: true }}
   ,{ path: "*", component: PageNotFound }
    //,{ path: '/register', name: 'register' , component: () => import('./views/Register.vue') }
  ]
})


// ตรวจสอบสิทธิการเข้าถึงหน้า
router.beforeEach((to, from, next) => {
  //console.log(to.meta);
  //console.log(router.app.$store);
  if (!to.meta.auth) return next();
  router.app.$store.dispatch('get_user_login')
    .then(() => {next(); })
    .catch(() => next({ name: 'home' }))

});




export default router;