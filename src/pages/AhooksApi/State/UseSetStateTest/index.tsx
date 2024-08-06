import { useSetState } from 'ahooks';

interface State {
  hello: string;
  [key: string]: any;
}

export default function UseSetStateTest() {
  const [state, setState] = useSetState<State>({
    hello: 'ahooks',
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState({ hello: 'world' })}>
          set hello
        </button>
        <button
          type="button"
          onClick={() => setState({ foo: 'bar' })}
          style={{ margin: '0 8px' }}
        >
          set foo
        </button>
      </p>
    </div>
  );
}
