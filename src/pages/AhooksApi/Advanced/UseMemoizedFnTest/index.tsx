
import { useMemoizedFn } from 'ahooks';
import { message } from 'antd';
import React, { useCallback, useRef, useState } from 'react';
export default function UseMemoizedFnTest() {
  const [count, setCount] = useState(0);
  const callbackFn = useCallback(() => {
    message.info(`Current count is ${count}`);
  }, [count]);
  const memoizedFn = useMemoizedFn(() => {
    message.info(`Current count is ${count}`);
  });




  return (
    <>
      <h3>
        持久化 function 的 Hook，一般情况下，可以使用 useMemoizedFn 完全代替
        useCallback，特殊情况见 <a href="https://ahooks.js.org/zh-CN/hooks/use-memoized-fn/#faq">FAQ</a>
      </h3>
      <p>count: {count}</p>
      <button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </button>

      <p>You can click the button to see the number of sub-component renderings</p>

      <div style={{ marginTop: 32 }}>
        <h3>Component with useCallback function:</h3>
        {/* use callback function, ExpensiveTree component will re-render on state change */}
        <ExpensiveTree showCount={callbackFn} />
      </div>

      <div style={{ marginTop: 32 }}>
        <h3>Component with useMemoizedFn function:</h3>
        {/* use memoized function, ExpensiveTree component will only render once */}
        <ExpensiveTree showCount={memoizedFn} />
      </div>
    </>
  );
}

// some expensive component with React.memo
const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div>
      <p>Render Count: {renderCountRef.current}</p>
      <button type="button" onClick={showCount}>
        showParentCount
      </button>
    </div>
  );
});