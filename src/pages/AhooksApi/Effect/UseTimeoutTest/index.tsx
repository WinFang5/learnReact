import { useTimeout } from 'ahooks';
import { useEffect, useState } from 'react';

export default function UseTimeoutTest() {
  const [state, setState] = useState(1);
  const clearTimeout = useTimeout(() => {
    setState(state + 1);
  }, 3000);
  useEffect(() => {
    return clearTimeout;
  }, []);
  return (
    <>
      <h3>一个可以处理 setTimeout 计时器函数的 Hook。</h3>
      <p>state: {state}</p>
    </>
  );
}
