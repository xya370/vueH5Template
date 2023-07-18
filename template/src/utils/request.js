/*
 * @Description:
 * @Author: XYA
 * @Date: 2023-05-24 16:30:40
 * @LastEditTime: 2023-07-17 16:54:03
 * @LastEditors: XYA
 */
import axios from "axios";
import store from "@/store/index.js";
import qs from "qs";
import { config, JsonConfig, baseUrl } from "./request_config.js";

const service = axios.create({
  baseURL: baseUrl,
});

service.interceptors.request.use(
  (config) => {
    const token = store.getters.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    let resData = response.data;
    if (!resData) {
      return Promise.reject(new Error("数据格式不对"), response);
    }
    if (resData.status === 0 || resData.status === "0") {
      return resData.data;
    } else {
      return Promise.reject(resData.msg);
    }
  },
  (error) => {
    if (error.message == "cancel") {
      return Promise.reject(new Error("请求已取消"));
    } else if (
      error.code === "ECONNABORTED" &&
      error.message.indexOf("timeout") >= 0
    ) {
      return Promise.reject(new Error("请求超时"));
    } else if (error["response"].status == 500) {
      return Promise.reject(error["response"].data);
    } else {
      return Promise.reject(error);
    }
  }
);

const get = (url, params) => {
  return service(
    {
      url,
      method: "get",
      params,
      paramsSerializer: (params) => {
        return qs.stringify(params, {
          indices: false,
        });
      },
    },
    config
  );
};

const getJson = (url, params) => {
  return service(
    {
      url,
      method: "get",
      params,
      paramsSerializer: (params) => {
        return qs.stringify(params, {
          indices: false,
        });
      },
    },
    JsonConfig
  );
};

const post = (url, data) => {
  return service(
    {
      url,
      method: "post",
      data: qs.stringify(data),
    },
    config
  );
};

const postJson = (url, data) => {
  return service(
    {
      url,
      method: "post",
      data,
    },
    JsonConfig
  );
};

export default { get, getJson, post, postJson };
