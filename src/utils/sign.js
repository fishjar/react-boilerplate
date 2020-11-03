/**
 * 随机字符串
 */
export const getNonce = () => Math.random().toString(36).substr(2);
