import { useEventListener } from 'ahooks';
import { useRef, useState } from 'react';

export default function UseEventListenerTest() {
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState('');
  const ref = useRef(null);

  useEventListener(
    'click',
    () => {
      setValue(value + 1);
    },
    { target: ref },
  );

  useEventListener('keydown', (ev) => {
    setValue1(ev.code);
  });


  return (
    <>
      <h3>优雅的使用 addEventListener。</h3>
      <button ref={ref} type="button">
        You click {value} times
      </button>
      <p>Your press key is {value1}</p>
    </>
  );
}
