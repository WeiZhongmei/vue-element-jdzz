import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';

import './mock/index.js';
import config from './config/index';

import "./assets/styles/theme/element-theme.scss";
import "./assets/styles/index.scss";

Vue.config.productionTip = false;
Vue.use(ElementUI, { size: "small", zIndex: 3000 });
Vue.use(config);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
