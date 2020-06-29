import Vue from 'vue';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import store from './store'; //ต้อง import ก่อน router ไม่งั้นค่าในstore จะเป็น ubdefiled
import router from './router';


import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import 'alertifyjs/build/css/alertify.css'
import 'alertifyjs/build/css/themes/default.css'
import * as alertify from  'alertifyjs'
import * as jquery from 'jquery'




Vue.config.productionTip = false;
Vue.prototype.jquery = jquery;
Vue.prototype.alertify = alertify;
Vue.use(VeeValidate);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
