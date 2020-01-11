import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Lazyload } from "vant";
Vue.use(Lazyload);

import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: "x8sW5hNzVTqQUl8Ov4mGGtI8ZRNzBOeC"
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
