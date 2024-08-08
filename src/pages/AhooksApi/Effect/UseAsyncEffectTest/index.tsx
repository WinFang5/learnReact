import { useAsyncEffect } from 'ahooks';
import React, { useState } from 'react';

function mockCheck(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}


export default function UseAsyncEffectTest() {
  const [pass, setPass] = useState<boolean>();

  useAsyncEffect(async () => {
    setPass(await mockCheck());
  }, []);

  return (
    <>
      <h3>useEffect 支持异步函数。</h3>
      {pass === undefined && 'Checking...'}
      {pass === true && 'Check passed.'}
    </>
  );
}
