import { useRafInterval } from 'ahooks';
import { useState } from 'react';
export default function UseRafIntervalTest() {
  const [count, setCount] = useState(0);
  useRafInterval(() => {
    setCount(count + 1);
  }, 1000);

  return (
    <>
      <h3>
        用 requestAnimationFrame 模拟实现 setInterval，API 和 useInterval
        保持一致，好处是可以在页面不渲染的时候停止执行定时器，比如页面隐藏或最小化等。
      </h3>
      <p>请注意，如下两种情况下很可能是不适用的，优先考虑 useInterval ：</p>
      <ul>
        <li>时间间隔小于 16ms</li>
        <li>希望页面不渲染的情况下依然执行定时器</li>
      </ul>
      <p>count: {count}</p>
    </>
  );
}
