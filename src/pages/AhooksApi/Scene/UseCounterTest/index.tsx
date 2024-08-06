import { useCounter } from 'ahooks';

export default function UseCounterTest() {
  const [current, { inc, dec, set, reset }] = useCounter(100, {
    min: 1,
    max: 101,
  });

  return (
    <div>
      <p>{current} [max: 101; min: 1;]</p>
      <div>
        <button
          type="button"
          onClick={() => {
            inc();
          }}
          style={{ marginRight: 8 }}
        >
          inc()
        </button>
        <button
          type="button"
          onClick={() => {
            dec();
          }}
          style={{ marginRight: 8 }}
        >
          dec()
        </button>
        <button
          type="button"
          onClick={() => {
            set(3);
          }}
          style={{ marginRight: 8 }}
        >
          set(3)
        </button>
        <button type="button" onClick={reset} style={{ marginRight: 8 }}>
          reset()
        </button>
      </div>
    </div>
  );
}
