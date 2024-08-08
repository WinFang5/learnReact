import { useLayoutEffect, useState } from 'react';
import { useUpdateLayoutEffect } from 'ahooks';



export default function UseUpdateLayoutEffectTest() {
  const [count, setCount] = useState(0);
  const [layoutEffectCount, setLayoutEffectCount] = useState(0);
  const [updateLayoutEffectCount, setUpdateLayoutEffectCount] = useState(0);

  useLayoutEffect(() => {
    console.log('layoutEffect');
    setLayoutEffectCount((c) => c + 1);
  }, [count]);

  useUpdateLayoutEffect(() => {
    console.log('updateLayoutEffect');
    setUpdateLayoutEffectCount((c) => c + 1);
    return () => {
      // do something
    };
  }, [count]); // you can include deps array if necessary
  return (
    <>
      <h3>
        useUpdateLayoutEffect 用法等同于
        useLayoutEffect，但是会忽略首次执行，只在依赖更新时执行。
      </h3>
      <p>layoutEffectCount: {layoutEffectCount}</p>
      <p>updateLayoutEffectCount: {updateLayoutEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </>
  );
}


