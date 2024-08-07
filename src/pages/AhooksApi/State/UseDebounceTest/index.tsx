import { useState } from 'react';
import { useDebounce } from 'ahooks';

export default function UseDebounceTest() {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <>
     <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
    <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
    </>
  );
}
