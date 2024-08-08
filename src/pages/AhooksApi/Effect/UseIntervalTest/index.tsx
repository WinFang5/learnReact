
import React, { useState } from 'react';
import { useInterval } from 'ahooks';
export default function UseIntervalTest() {
  const [count, setCount] = useState(0);
  const clearInterval = useInterval(() => {
    setCount(count + 1);
  }, 1000);
  
  return (
    <>
      <h3>一个可以处理 setInterval 的 Hook。</h3>
      count: {count}
      <button onClick={()=>clearInterval()}>clearInterval</button>
    </>
  );
}
