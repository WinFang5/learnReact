import { useSafeState } from 'ahooks';
import { useEffect, useState } from 'react';


const Child = () => {
  const [value, setValue] = useSafeState<string>();

  useEffect(() => {
    setTimeout(() => {
      setValue('data loaded from server');
    }, 5000);
  }, []);
  const text = value || 'Loading...';

  return <div>{text}</div>;
};

export default function UseSafeStateTest() {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <h3>
        用法与 React.useState 完全一样，但是在组件卸载后异步回调内的 setState
        不再执行，避免因组件卸载后更新状态而导致的内存泄漏。
      </h3>
      <div>
      <button onClick={() => setVisible(false)}>Unmount</button>
      <button onClick={() => setVisible(true)}>mount</button>
      {visible && <Child />}
    </div>
    </>
  );
}
