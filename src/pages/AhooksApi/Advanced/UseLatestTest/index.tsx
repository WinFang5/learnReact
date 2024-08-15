import React, { useState, useEffect } from 'react';
import { useLatest } from 'ahooks';
export default function UseLatestTest() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(count2 + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h3>返回当前最新值的 Hook，可以避免闭包问题。</h3>
      <p>count(useLatest): {count}</p>
      <p>count(defult): {count2}</p>
    </>
  );
}
