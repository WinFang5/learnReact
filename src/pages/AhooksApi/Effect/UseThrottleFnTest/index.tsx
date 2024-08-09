import { useThrottleFn } from 'ahooks';
import { useState } from 'react';

export default function UseThrottleFnTest() {
  const [value, setValue] = useState(0);
  const { run } = useThrottleFn(
    () => {
      setValue(value + 1);
    },
    { wait: 500 },
  );
  return (
    <>
      <h3>频繁调用 run，但只会每隔 500ms 执行一次相关函数。</h3>
      <p style={{ marginTop: 16 }}> Clicked count: {value} </p>
      <button type="button" onClick={run}>
        Click fast!
      </button>
    </>
  );
}
