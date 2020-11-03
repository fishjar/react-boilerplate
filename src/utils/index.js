import {
  setUserInfo,
  getUserInfo,
  clearUserInfo,
  setToken,
  getToken,
  clearToken,
  getOpenid,
  setOpenid,
  clearOpenid,
  clearLoginInfo,
} from "./storage";
import { formatArea } from "./format";
import { getNonce } from "./sign";
import {
  isMobile,
  isIDCard,
  isWechat,
  isMobileOS,
  isIOS,
  isAndroid,
} from "./verification";

export default {
  setUserInfo,
  getUserInfo,
  clearUserInfo,
  setToken,
  getToken,
  clearToken,
  getOpenid,
  setOpenid,
  clearOpenid,
  clearLoginInfo,
  formatArea,
  getNonce,
  isMobile,
  isIDCard,
  isWechat,
  isMobileOS,
  isIOS,
  isAndroid,
};
