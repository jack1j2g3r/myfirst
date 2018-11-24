//导入 Vue模块
import Vue from 'vue';

//导入 vue-router 路由模块
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//引入 首页/会员/购物车/搜索组件
import home from './components/home.vue';
import member from './components/member.vue';
import shopcar from './components/shopcar.vue';
import search from './components/search.vue';

//实例化路由对象
var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path:'/home', component: home},
        {path:'/member', component: member},
        {path:'/shopcar', component: shopcar},
        {path:'/search', component: search}
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮类 router-link-active 为 mui-active
});

//输出路由对象
export default router;