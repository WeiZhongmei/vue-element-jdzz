import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const constantRoutes = [
    {
        path: '/login',
        name: '用户登录',
        component: () => import('@/views/login/index.vue')
    }
]

const dynamicRoutes = [
    {
        path: '/',
        name: '首页',
        redirect: '/login'
    },
    {
        path: '/home',
        name: '首页',
        component: () => import('@/views/home/index.vue'),
    }
]

const routes = [
    ...constantRoutes,
    ...dynamicRoutes,
]

export default new Router({
    mode: 'history',
    routes
})