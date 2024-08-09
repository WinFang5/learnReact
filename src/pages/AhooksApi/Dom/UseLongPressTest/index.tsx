import { useLongPress } from 'ahooks';
import { useRef, useState } from 'react';
export default function UseLongPressTest() {
  const [counter, setCounter] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);
  useLongPress(() => setCounter((s) => s + 1), ref);

  return (
    <>
      <h3>监听目标元素的长按事件。</h3>
      <button ref={ref} type="button">
        Press me
      </button>
      <p>counter: {counter}</p>
    </>
  );
}
