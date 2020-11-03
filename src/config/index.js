import dev from "./development";
import prod from "./production";

/**
 * 默认配置
 */
const defaultConfig = {
  APP_NAME: "REACT项目",
};

const APP_ENV = process.env.REACT_APP_ENV || "dev";
const configMap = { dev, prod };

/**
 * 合并配置
 */
export default {
  ...defaultConfig,
  ...configMap[APP_ENV],
  APP_ENV,
};
