import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';

// require styles
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper, /* { default global options } */);

Vue.config.productionTip = false;
Vue.use(Antd);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
