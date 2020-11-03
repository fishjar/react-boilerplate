import { useState } from "react";

/**
 * 倒计时
 * @param {*} initCount
 */
export const useCountDown = (initCount = 60) => {
  const [count, setCount] = useState(initCount);
  const [status, setStatus] = useState(0); // 0未开始，1计时中，2已结束

  const startCount = () => {
    if (count === initCount && (status === 0 || status === 2)) {
      setStatus(1);
      const endTime = Date.now() + 1000 * initCount;
      const run = () => {
        const diff = endTime - Date.now();
        if (diff >= 0) {
          // setCount((diff / 1000).toFixed(0));
          setCount((diff / 1000).toFixed(2));
          requestAnimationFrame(run);
        } else {
          setCount(initCount);
          setStatus(2);
        }
      };
      run();
    }
  };
  return [count, status, startCount];
};
