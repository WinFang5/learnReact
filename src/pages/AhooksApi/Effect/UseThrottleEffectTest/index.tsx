import React, { useState } from 'react';
import { useThrottleEffect } from 'ahooks';

export default function UseThrottleEffectTest() {
  const [value, setValue] = useState('hello');
  const [records, setRecords] = useState<string[]>([]);
  useThrottleEffect(
    () => {
      setRecords((val) => [...val, value]);
    },
    [value],
    {
      wait: 1000, 
    },
  );
  return (
    <>
      <h3>为 useEffect 增加节流的能力。</h3>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Typed value"
        style={{ width: 280 }}  
      />
       <p style={{ marginTop: 16 }}>
        <ul>
          {records.map((record, index) => (
            <li key={index}>{record}</li>
          ))}
        </ul>
      </p>
    </>
  );
}
