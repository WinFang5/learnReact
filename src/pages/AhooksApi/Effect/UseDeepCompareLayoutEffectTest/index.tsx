import { useDeepCompareLayoutEffect } from 'ahooks';
import React, { useLayoutEffect, useState, useRef } from 'react'; 
export default function UseDeepCompareLayoutEffectTest() {
  const [, setCount] = useState(0);
  const effectCountRef = useRef(0);
  const deepCompareCountRef = useRef(0);
  useLayoutEffect(() => {
    console.log('effect');
    effectCountRef.current += 1;
  }, [{}]);
  useDeepCompareLayoutEffect(() => {
    deepCompareCountRef.current += 1;
    console.log('deepCompare');
    return () => {
      // do something
    };
  }, [{}]);
  return (
    <>
      <h3>
        用法与 useLayoutEffect 一致，但 deps 通过 react-fast-compare
        进行深比较。
      </h3>
      <p>effectCount: {effectCountRef.current}</p>
      <p>deepCompareCount: {deepCompareCountRef.current}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </>
  );
}
