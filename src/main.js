//引入Vue模块
import Vue from 'vue';

//导入app.vue组件
import app from './app.vue';

//引入 VuePreview 模块
import VuePreview from 'vue-preview';
//安装模块
Vue.use(VuePreview);

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

//按需 引入 vant 组件
import { Tab, Tabs,  Lazyload } from 'vant';
Vue.use(Tab).use(Tabs).use(Lazyload);
//引入 vant 样式 
import './lib/vant/css/index.css';

//全局设置ajax请求根域名
Vue.http.options.root = "http://127.0.0.1:3000/";

//引入时间处理模块
import Moment from 'moment';

// 定义一个 Vue 全局的过滤器，名字叫做  timeFormat
Vue.filter('timeFormat', function(data, pattern='YYYY-MM-DD hh:mm:ss'){
    return Moment(data).format(pattern);  
});

//实例化Vue
new Vue({
    el: "#app",
    render: (c)=>c(app),
    router
});