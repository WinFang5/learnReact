import { useMutationObserver } from 'ahooks';
import React, { useRef, useState } from 'react';
export default function UseMutationObserverTest() {
  const [width, setWidth] = useState(200);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useMutationObserver(
    (mutationsList) => {
      // console.log(mutationsList);
      // mutationsList.forEach(() => setCount((c) => c + 1));
      setCount((c) => c + 1)
    },
    ref,
    { attributes: true },
  );

  return (
    <>
      <h3>一个监听指定的 DOM 树发生变化的 Hook，参考 MutationObserver</h3>
      <div ref={ref} style={{ width, padding: 12, border: '1px solid #000', marginBottom: 8 }}>
        current width：{width}
      </div>
      <button onClick={() => setWidth((w) => w + 10)}>widening</button>
      <p>Mutation count {count}</p>
    </>
  );
}
