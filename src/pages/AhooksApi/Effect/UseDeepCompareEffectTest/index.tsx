import { useDeepCompareEffect } from 'ahooks';
import React, { useEffect, useState, useRef } from 'react';
export default function UseDeepCompareEffectTest() {
  const [count, setCount] = useState(0);  
  const effectCountRef = useRef(0);
  const deepCompareCountRef = useRef(0);
  useEffect(() => {
    console.log('effect');
    effectCountRef.current += 1;
  }, [{}]);
  useDeepCompareEffect(() => {
    console.log('deepCompare'); 
    deepCompareCountRef.current += 1;
    return () => {
      // do something
    };
  }, [{}]);
  return (
    <>
      <h3>
        用法与 useEffect 一致，但 deps 通过 react-fast-compare 进行深比较。
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
