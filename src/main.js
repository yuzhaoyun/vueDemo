// 入口文件
import Vue from 'vue';
import App from './App.vue';

// 1.1导入路由的包
import VueRouter from 'vue-router';
// 1.2安装路由
Vue.use(VueRouter);

// 2.1导入vue-resource
import VueResource from 'vue-resource';
// 2.2安装vue-resource
Vue.use(VueResource);


// 导入全部的mint-UIz组件
// import MintUI from 'mint-ui';
// import 'mint-ui/lib/style.css';
// Vue.use(MintUI);
// 按需导入mint-ui
import {Header,Swipe,SwipeItem} from 'mint-ui';
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
// 引入mui的样式
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';
// 1.3导入自己的router.js路由模块
import router from './router.js';

var vm=new Vue({
    el:"#app",
    render:c=>c(App),
    // 1.4挂载路由对象到实例上
    router,
})