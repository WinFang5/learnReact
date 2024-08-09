import React, { useState } from 'react';
import { useKeyPress } from 'ahooks';
export default function UseKeyPressTest() {
  const [counter, setCounter] = useState(0);
  useKeyPress('uparrow', () => {
    setCounter((s) => s + 1);
  });
  useKeyPress('downarrow', () => {
    setCounter((s) => s - 1);
  });


  return (
    <>
      <h3>监听键盘按键，支持组合键，支持按键别名。</h3>
      <p>Try pressing the following: </p>
      <div>1. Press ArrowUp by key to increase</div>
      <div>2. Press ArrowDown by keyCode to decrease</div>
      <div>
        counter: <span style={{ color: '#f00' }}>{counter}</span>
      </div>
    </>
  );
}
