import Vue from 'vue';
import router from '@/route';
import App from '@/views';
import store from '@/store';

import ElementUI from 'element-ui';
import 'normalize.css';
import 'element-ui/lib/theme-chalk/index.css';

import './styles/index.less';

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
