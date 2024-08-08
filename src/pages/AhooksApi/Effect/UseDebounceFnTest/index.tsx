import { useDebounceFn } from 'ahooks';
import React, { useState } from 'react';

export default function UseDebounceFnTest() {
  const [value, setValue] = useState(0);
  const { run } = useDebounceFn(
    () => {
      setValue(value + 1);
    },
    {
      wait: 500,
    },
  );
  return (
    <>
      <h3>
        用来处理防抖函数的 Hook。频繁调用 run，但只会在所有点击完成 500ms
        后执行一次相关函数
      </h3>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <button type="button" onClick={run}>
        Click fast!
      </button>
    </>
  );
}
