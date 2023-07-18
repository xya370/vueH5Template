import { createApp } from "vue";
import "@/icons";
import SvgIcon from "@components/SvgIcon"; // svg component
import * as Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/styles/base.less";

createApp(App).use(store).use(router).use(Vant).use(SvgIcon).mount("#app");
