import { usePrevious } from 'ahooks';
import  { useState } from 'react';

export default function UsePreviousTest() {
  const [count, setCount] = useState(0);
  const previous = usePrevious(count);
  console.log("🚀 ~ UsePreviousTest ~ previous:", previous)
  return (
    <>
      <h3>保存上一次状态的 Hook。</h3>
      <div>counter current value: {count}</div>
      <div style={{ marginBottom: 8 }}>counter previous value: {previous}</div>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        increase
      </button>
      <button type="button" style={{ marginLeft: 8 }} onClick={() => setCount((c) => c - 1)}>
        decrease
      </button>
    </>
  );
}
