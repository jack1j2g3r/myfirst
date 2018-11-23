//导入Vue-router模块
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

//导入login.vue组件
import login from "./components/login.vue";

//导入register.vue组件
import register from "./components/register.vue";

//创建Vue-router实例对象
var router = new VueRouter({
    routes: [
        {path:'/login', component:login},
        {path:'/register', component:register}
    ]
});

//输出 router 对象
export default router;