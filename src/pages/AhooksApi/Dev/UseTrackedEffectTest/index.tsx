import React, { useState } from 'react';
import { useTrackedEffect } from 'ahooks';
export default function UseTrackedEffectTest() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useTrackedEffect(
    (changes,currentDeps) => {
      console.log('Index of changed dependencies: ', changes,currentDeps);
    },
    [count, count2],
  );
  return (
    <>
      <h3>追踪是哪个依赖变化触发了 useEffect 的执行。</h3>
      <p>Please open the browser console to view the output!</p>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>count + 1</button>
      </div>
      <div style={{ marginTop: 16 }}>
        <p>Count2: {count2}</p>
        <button onClick={() => setCount2((c) => c + 1)}>count + 1</button>
      </div>
    </>
  );
}
