import { useResetState } from 'ahooks';

interface State {
  hello: string;
  count: number;
}
export default function UseResetStateTest() {
  const [state, setState, resetState] = useResetState<State>({
    hello: '',
    count: 0,
  });
  return (
    <>
      <h3>提供重置 state 方法的 Hooks，用法与 React.useState 基本一致。</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button
        type="button"
        style={{ marginRight: '8px' }}
        onClick={() => setState({ hello: 'world', count: 1 })}
      >
        set hello and count
      </button>
      <button type="button" onClick={resetState}>
        resetState
      </button>
    </>
  );
}
