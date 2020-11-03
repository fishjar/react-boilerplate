import data from "./china-area-data.json";

/**
 * 转换省市区数据
 * @param {*} key
 */
export const formatArea = (key = "86") =>
  data[key]
    ? Object.entries(data[key]).map(([k, v]) => ({
        key: k,
        value: v,
        label: v,
        children: formatArea(k),
      }))
    : [];
