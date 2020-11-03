const USER_INFO = "react_user";
const AUTH_TOKEN = "react_token";
const OPENID = "react_openid";

/**
 * 设置登录信息
 * @param {*} param0
 */
export const setUserInfo = (user) => {
  localStorage.setItem(USER_INFO, JSON.stringify(user));
};

/**
 * 获取登录信息
 */
export const getUserInfo = () => {
  const s = localStorage.getItem(USER_INFO);
  try {
    return JSON.parse(s);
  } catch (err) {
    //
  }
  return null;
};

/**
 * 清空登录信息
 */
export const clearUserInfo = () => {
  localStorage.removeItem(USER_INFO);
};

/**
 * 设置 token 信息
 * @param {*} param0
 */
export const setToken = (token) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

/**
 * 获取 token 信息
 */
export const getToken = () => {
  return localStorage.getItem(AUTH_TOKEN);
};

/**
 * 清空 token 信息
 */
export const clearToken = () => {
  localStorage.removeItem(AUTH_TOKEN);
};

/**
 * 设置 openid 信息
 * @param {*} param0
 */
export const setOpenid = (v) => {
  localStorage.setItem(OPENID, v);
};

/**
 * 获取 openid 信息
 */
export const getOpenid = () => {
  return localStorage.getItem(OPENID);
};

/**
 * 清空 openid 信息
 */
export const clearOpenid = () => {
  localStorage.removeItem(OPENID);
};

/**
 * 清除登录信息
 */
export const clearLoginInfo = () => {
  clearToken();
  clearUserInfo();
  clearOpenid();
};
