import globalMethods from './globalMethods/index';

const install = Vue => {
    if (install.installed) return;
    
    Vue.prototype.$rest = globalMethods.rest;
}


export default {
    install
};