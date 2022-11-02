import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import gsap from 'gsap';
import './main.css';

// Vue Material
import { MdIcon } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
Vue.use(MdIcon);
// gsap
Vue.prototype.$gsap = gsap;
// swiper
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
