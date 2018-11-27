//导入 Vue模块
import Vue from 'vue';

//导入 vue-router 路由模块
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//引入 首页/会员/购物车/搜索组件
import home from './components/tabbar/home.vue';
import member from './components/tabbar/member.vue';
import shopcar from './components/tabbar/shopcar.vue';
import search from './components/tabbar/search.vue';
//导入 新闻列表 组件
import newslist from './components/news/newslist.vue';
//导入 新闻详情 组件
import newsdetail from './components/news/newsdetail.vue';
//导入 图片列表 组件
import photolist from './components/photo/photolist.vue';
//导入 图片详情 组件
import photodetail from './components/photo/photodetail.vue';
//导入 商品列表 组件
import goodslist from './components/goods/goodslist.vue';
//导入 商品详情 组件
import goodsdetail from './components/goods/goodsdetail.vue';

//实例化路由对象
var router = new VueRouter({
    routes: [
        {path: '/', redirect: '/home'},
        {path:'/home', component: home},
        {path:'/member', component: member},
        {path:'/shopcar', component: shopcar},
        {path:'/search', component: search},
        {path:'/home/newslist', component: newslist},
        {path:'/home/newsdetail/:id', component: newsdetail},
        {path:'/home/photolist', component: photolist},
        {path:'/home/photodetail/:id', component: photodetail},
        {path:'/home/goodslist', component: goodslist},
        {path:'/home/goodsdetail/:id', component: goodsdetail},
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮类 router-link-active 为 mui-active
});

//输出路由对象
export default router;