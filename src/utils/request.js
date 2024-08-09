//引入我们下载好的 Axios 库
import axios from "axios";
import { message } from "antd";
import store from "@/store/index";

const config = {
  // baseURL: "http://api.h5ke.top",
  baseURL: "http://localhost:3000",
  timeout: 5000,
};

//可以使用自定义配置新建一个 axios 实例
var req = axios.create({
  //请求路径
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: config.baseURL,

  // 覆写库的超时默认值
  // 现在，在超时前，所有请求都会等待 5 秒
  timeout: config.timeout,
});

// 添加请求拦截器
req.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    if (config.headers) {
      const {
        users: { token },
      } = store.getState();
      config.headers.authorization = token;
    }
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
req.interceptors.response.use(
  (response) => {
    if (response.data.errmsg === "token error") {
      message.error("token Error");
      store.dispatch({ type: "users/clearAll" });
      window.location.replace("/login");
    } else if (response.data.errmsg === "error") {
      window.location.replace("/login");
    }
    // 对响应数据做点什么
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 分类导出常用方法
export const http = {
  get(url, data, config) {
    return req.get(url, {
      params: data,
      ...config,
    });
  },
  post(url, data, config) {
    return req.post(url, data, config);
  },
  put(url, data, config) {
    return req.put(url, data, config);
  },
  patch(url, data, config) {
    return req.patch(url, data, config);
  },
  delete(url, data, config) {
    return req.get(url, {
      params: data,
      ...config,
    });
  },
};

// 默认导出request对象
export default req;
