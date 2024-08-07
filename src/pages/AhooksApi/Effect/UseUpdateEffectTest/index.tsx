import React, { useEffect, useState } from 'react';
import { useUpdateEffect } from 'ahooks';


export default function UseUpdateEffectTest() {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);

  useEffect(() => {
    console.log('effect count:', effectCount);
    setEffectCount((c) => c + 1);
  }, [count]);

  useUpdateEffect(() => {
    console.log('update effect count:', updateEffectCount);
    setUpdateEffectCount((c) => c + 1);
    return () => {
      // do something
    };
  }, [count]); // you can include deps array if necessary



  return (
    <>
      <h3>
        useUpdateEffect 用法等同于
        useEffect，但是会忽略首次执行，只在依赖更新时执行。
      </h3>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </>
  );
}
