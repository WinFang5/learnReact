import { useWhyDidYouUpdate } from 'ahooks';
import React, { useState } from 'react';
import Demo from './components/Demo';
export default function UseWhyDidYouUpdateTest() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>帮助开发者排查是哪个属性改变导致了组件的 rerender。</h3>
      <Demo count={count} />
      <div>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>count -</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)} style={{ marginLeft: 8 }}>
          count +
        </button>
      </div>
      <p style={{ marginTop: 8 }}>Please open the browser console to view the output!</p>
    </>
  );
}
