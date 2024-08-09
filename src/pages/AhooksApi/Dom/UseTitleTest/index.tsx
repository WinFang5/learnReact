import { useTitle } from 'ahooks';
export default function UseTitleTest() {
  useTitle('Page Title',{
    restoreOnUnmount:true
  });

  return (
    <>
      <h3>用于设置页面标题。</h3>
    </>
  );
}
