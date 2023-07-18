/*
 * @Description:
 * @Author: XYA
 * @Date: 2023-07-14 15:44:38
 * @LastEditTime: 2023-07-17 17:05:08
 * @LastEditors: XYA
 */
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/myView",
    name: "myView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/my"),
  },
  {
    path: "/imgInfo",
    name: "imgInfo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@views/home/imgInfo"),
    meta: {
      hideNabbar: true,
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
