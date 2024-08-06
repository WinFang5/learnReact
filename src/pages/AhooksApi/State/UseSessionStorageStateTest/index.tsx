import { useSessionStorageState } from 'ahooks';

export default function UseSessionStorageStateTest() {
  const [message, setMessage] = useSessionStorageState<string | undefined>(
    'use-session-storage-state-demo1',
    {
      defaultValue: 'Hello~',
    },
  );
  return (
    <>
      <input
        value={message || ''}
        placeholder="Please enter some words..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        style={{ margin: '0 8px' }}
        type="button"
        onClick={() => setMessage('Hello~')}
      >
        Reset
      </button>
      <button type="button" onClick={() => setMessage(undefined)}>
        Clear
      </button>
    </>
  );
}
