/*
 * @Description:
 * @Author: XYA
 * @Date: 2023-07-17 14:29:28
 * @LastEditTime: 2023-07-17 15:18:29
 * @LastEditors: XYA
 */
// import Vue from "vue";
// import SvgIcon from "@components/SvgIcon"; // svg component

// register globally
// Vue.component("SvgIcon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);
