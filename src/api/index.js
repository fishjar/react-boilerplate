import r from "./request";

const API_LOGIN = "/admin/account/login"; // 登录
const API_USERS = "/admin/users"; // 用户

export default {
  userLogin: (args) => r(API_LOGIN, args, "POST"), // 登录
  getUserList: (args) => r(API_USERS, args), // 用户列表
  getUserDetail: ({ id }) => r(`${API_USERS}/${id}`), // 用户详情
};
