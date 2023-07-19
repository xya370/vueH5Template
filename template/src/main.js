import { createApp } from "vue";
import * as Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
// import router from "./router";
// import store from "./store";
import "@/styles/base.less";

import SvgIcon from '@/components/SvgIcon' //这是组件路径
const req = require.context('@/icons', false, /\.svg$/) //这是svg文件路径
req.keys().map(req)

createApp(App).use(store).use(router).use(Vant).component('svg-icon', SvgIcon).mount("#app");
