import  { useState } from 'react';
import { useThrottle } from 'ahooks';



export default function UseThrottleTest() {
  const [value, setValue] = useState<string>();
  const throttledValue = useThrottle(value, { wait: 500 });

  return (
    <>
     <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}
      />
    <p style={{ marginTop: 16 }}>throttledValue: {throttledValue}</p>
    </>
  );
}
