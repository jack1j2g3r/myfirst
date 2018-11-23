//引入Vue模块
import Vue from 'vue';

//导入app.vue组件
import app from './app.vue';

//按需导入 mint-ui 组件
import { Header } from "mint-ui";
Vue.component(Header.name, Header);

import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

//导入 mui 样式
import './lib/mui/css/mui.min.css';

//实例化Vue
new Vue({
    el: "#app",
    render: (c)=>c(app)
})