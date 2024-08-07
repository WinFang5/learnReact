import { useGetState } from 'ahooks';
import { useEffect } from 'react';

export default function UseGetStateTest() {
  const [count, setCount, getCount] = useGetState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('current count:', getCount());
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h3>给 React.useState 增加了一个 getter 方法，以获取当前最新值。</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        count: {count}
      </button>
    </>
  );
}
