import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App.vue'
import router from './router'
import store from './store'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import * as jquery from 'jquery'




Vue.config.productionTip = false;
Vue.prototype.jquery = jquery;
Vue.use(VeeValidate);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
