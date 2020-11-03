const userAgent = window.navigator.userAgent.toLowerCase();

/**
 * 验证手机号码
 * @param {string} str
 */
export const isMobile = (str) => /^1[3-9]\d{9}$/.test(str);

/**
 * 验证身份证号码
 * @param {string} str
 */
export const isIDCard = (str) => /(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(str);

/**
 * 是否手机系统
 */
export const isMobileOS = /iphone|ipad|android/i.test(userAgent);

/**
 * 是否苹果系统
 */
export const isIOS = /iphone|ipad/i.test(userAgent);

/**
 * 是否安卓系统
 */
export const isAndroid = /android/i.test(userAgent);

/**
 * 是否微信客户端5.0以上
 */
export const isWechat = /micromessenger/i.test(userAgent);
