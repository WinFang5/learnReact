import { useUpdate } from 'ahooks';

export default function UseUpdateTest() {
  const update = useUpdate();

  return (
    <>
      <h3>useUpdate 会返回一个函数，调用该函数会强制组件重新渲染。</h3>
      <div>Time: {Date.now()}</div>
      <button type="button" onClick={update} style={{ marginTop: 8 }}>
        update
      </button>
    </>
  );
}
