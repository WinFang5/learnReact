import React, { useState } from 'react';
import { useRafTimeout } from 'ahooks'; 
export default function UseRafTimeoutTest() {
  const [count, setCount] = useState(0);
  useRafTimeout(() => {
    setCount(count + 1);
  }, 3000);

  return (
    <>
      <h3>
        用 requestAnimationFrame 模拟实现 setTimeout，API 和 useTimeout
        保持一致，好处是可以在页面不渲染的时候不触发函数执行，比如页面隐藏或最小化等。
      </h3>
      <p>count: {count}</p>
    </>
  );
}
