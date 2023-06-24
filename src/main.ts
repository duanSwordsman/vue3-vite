import { createApp } from 'vue';
import App from './App.vue';

// 引入Router
import Router from './router';
// 引入vuex
import Store from './store';
// 引入Element-plus
import Element from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// 初始化应用
createApp(App).use(Router).use(Store).use(Element).mount('#app');
