import { useExternal } from 'ahooks';
import a from './test-external-script';
export default function UseExternalTest() {
  const status = useExternal('./test-external-script.js', {
    js: { async: true },
  });
  return (
    <>
      <h3>动态注入 JS 或 CSS 资源，useExternal 可以保证资源全局唯一。</h3>
      <p>
        Status: <b>{status}</b>
      </p>
      <p>
        Response:{' '}
        <i>{status === 'ready' ? a.start() : '-'}</i>
      </p>
    </>
  );
}
