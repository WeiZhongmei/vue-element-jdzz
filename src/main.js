import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './mock/index.js';
import config from './config/index';

Vue.config.productionTip = false;
Vue.use(config);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
