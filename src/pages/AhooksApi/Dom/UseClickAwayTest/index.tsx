
import React, { useState, useRef } from 'react';
import { useClickAway } from 'ahooks';
export default function UseClickAwayTest() {
  const [counter, setCounter] = useState(0);
  const ref1 = useRef<HTMLButtonElement>(null);
  useClickAway(() => {
    setCounter((s) => s + 1);
  }, ref1);

  return (
    <>
      <h3>监听目标元素外的点击事件。</h3>
      <button ref={ref1} type="button">
        box
      </button>
      <p>counter: {counter}</p>
    </>
  );
}
