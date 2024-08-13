import UseControllableValueComp from "./components/UseControllableValueComp";
import React, { useState } from 'react';
export default function UseControllableValueTest() {
  const [state, setState] = useState<string>('');
  const clear = () => {
    setState('');
  };
  return (
    <>
      <h3>
        在某些组件开发时，我们需要组件的状态既可以自己管理，也可以被外部控制，useControllableValue
        就是帮你管理这种状态的 Hook。
      </h3>
      不传 
      <UseControllableValueComp />
      传值
      <UseControllableValueComp value={state} onChange={setState}/>
    </>
  );
}
