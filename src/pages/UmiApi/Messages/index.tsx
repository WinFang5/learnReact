// useOutletContext
import { useOutletContext } from 'umi';

export default function Messages() {
  const outletContext = useOutletContext();
  console.log('🚀 ~ Messages ~ outletContext:', outletContext);
  return (
    <>
      <p>Messages</p>
      <p>useOutletContext 用于返回 Outlet 组件上挂载的 context 。</p>
    </>
  );
}
