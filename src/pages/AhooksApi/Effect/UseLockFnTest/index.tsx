import { useLockFn } from 'ahooks';
import { message } from 'antd';
import { useState } from 'react';

function mockApiRequest() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

export default function UseLockFnTest() {
  const [count, setCount] = useState(0);
  const submit = useLockFn(async () => {
    message.info('Start to submit');
    await mockApiRequest();
    setCount((val) => val + 1);
    message.success('Submit finished');
  });
  return (
    <>
      <h3>用于给一个异步函数增加竞态锁，防止并发执行。</h3>
      <p>在 submit 函数执行完成前，其余的点击动作都会被忽略。</p>
      <p>Submit count: {count}</p>
      <button onClick={submit}>Submit</button>
    </>
  );
}
