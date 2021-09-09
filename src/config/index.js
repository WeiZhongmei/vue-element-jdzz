import globalMethods from './globalMethods/index';
import components from '../components/index';
console.log('components', components);
const install = Vue => {
    if (install.installed) return;

    // 全局组件注入
    Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    })
    
    // 全局方法
    Vue.prototype.$rest = globalMethods.rest; //发送请求
    Vue.prototype.alertSuccess = globalMethods.alert.alertSuccess;
    Vue.prototype.warning = globalMethods.alert.warning;
    Vue.prototype.alertError = globalMethods.alert.alertError;
}


export default {
    install
};