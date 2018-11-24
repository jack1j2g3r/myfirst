//引入Vue模块
import Vue from 'vue';

//导入app.vue组件
import app from './app.vue';

//导入 router.js 模块
import router from './router.js';

//引入vue-resource 模块
import VueResource from 'vue-resource';
//安装vue-resource
Vue.use(VueResource);

//按需导入 mint-ui 组件
import 'mint-ui/lib/style.css';
import { Header } from "mint-ui";
Vue.component(Header.name, Header);

import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

//按需导入 mint-ui 轮播图 组件
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入 mui 样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

//实例化Vue
new Vue({
    el: "#app",
    render: (c)=>c(app),
    router
});