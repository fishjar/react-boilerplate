import axios from "axios";
// import qs from "qs";
import appConfig from "../config";
import utils from "../utils";

/**
 * 实例
 */
const httpInstance = axios.create({
  baseURL: appConfig.BASE_URL,
  // paramsSerializer: (params) => qs.stringify(params),
});

/**
 * 拦截器
 */
httpInstance.interceptors.request.use(
  function (config) {
    const token = utils.getToken();
    if (token) {
      Object.assign(config.headers, {
        Authorization: `Bearer ${token}`,
      });
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**
 * 拦截器
 */
httpInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**
 * 请求
 * @param {*} url
 * @param {*} args
 * @param {*} method
 */
const request = async (url, args = null, method = "GET") => {
  let data = null;
  let error = null;
  try {
    // 开始请求
    console.log("--->", method, url, args);
    let res;
    switch (method) {
      case "GET":
        res = await httpInstance.get(url, { params: args });
        break;
      case "POST":
        res = await httpInstance.post(url, args);
        break;
      case "PATCH":
        res = await httpInstance.patch(url, args);
        break;
      case "DELETE":
        res = await httpInstance({
          url,
          method: "delete",
          args,
        });
        break;
      default:
        throw new Error("请求方法不支持");
    }
    data = res.data;
    console.log("<---", method, url, args, res.data);
  } catch (err) {
    // 请求错误
    console.log("<--- error", err);
    error = err;
  } finally {
    // 结束请求
  }
  return [data, error];
};

export default request;
