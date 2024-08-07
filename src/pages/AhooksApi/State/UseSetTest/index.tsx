import { useSet } from 'ahooks';

export default function UseSetTest() {
  const [set, { add, remove, reset }] = useSet(['Hello']);
  console.log('🚀 ~ UseSetTest ~ set:', set);

  return (
    <>
      <h3>管理 Set 类型状态的 Hook。</h3>
      <button type="button" onClick={() => add(String(Date.now()))}>
        Add Timestamp
      </button>
      <button
        type="button"
        onClick={() => remove('Hello')}
        disabled={!set.has('Hello')}
        style={{ margin: '0 8px' }}
      >
        Remove Hello
      </button>
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
      <div style={{ marginTop: 16 }}>
        <pre>{JSON.stringify(Array.from(set), null, 2)}</pre>
      </div>
    </>
  );
}
