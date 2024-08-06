import { PageContainer } from '@ant-design/pro-components';
import { useRef, useState } from 'react';

export default function TestPage() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<any | null>(null);

  function handleStart() {
    // clearInterval(intervalRef.current);
    console.log('开始计时');
    // 开始计时。
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current = setInterval(() => {
      // 每 10ms 更新一次当前时间。
      setNow(Date.now());
    }, 10);
    console.log('intervalRef.current', intervalRef.current);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <PageContainer ghost>
      <h1>时间过去了： {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>开始</button>
      <button onClick={handleStop}>停止</button>
    </PageContainer>
  );
}
