import React from 'react';
import { useReactive } from 'ahooks';
export default function UseReactiveTest() {
  const state = useReactive({
    count: 0,
    inputVal: '',
    obj: {
      value: '',
    },
  });
  return (
    <>
      <h3>
        提供一种数据响应式的操作体验，定义数据状态不需要写useState，直接修改属性即可刷新视图。111
      </h3>
      <p> state.count：{state.count}</p>
      <button style={{ marginRight: 8 }} onClick={() => state.count++}>
        state.count++
      </button>
      <button onClick={() => state.count--}>state.count--</button>

      <p style={{ marginTop: 20 }}> state.inputVal: {state.inputVal}</p>
      <input onChange={(e) => (state.inputVal = e.target.value)} />

      <p style={{ marginTop: 20 }}> state.obj.value: {state.obj.value}</p>
      <input onChange={(e) => (state.obj.value = e.target.value)} />
    </>
  );
}
