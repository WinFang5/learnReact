import React, { useState,useRef } from 'react';
import { useCreation } from 'ahooks';

class Foo {
  constructor() {
    this.data = Math.random();
  }

  data: number;
}

export default function UseCreationTest() {
  const foo = useCreation(() => new Foo(), []);
  // 对比 useRef
  const foo1 = useRef(new Foo());
  console.log('foo1', foo1.current.data);
  const [, setFlag] = useState({});
  return (
    <>
      <h3>sudo ln -s $(which python3) /usr/local/bin/python
        useCreation 是 useMemo 或 useRef 的替代品。 因为 useMemo 不能保证被 memo
        的值一定不会被重新计算，而 useCreation 可以保证这一点。
      </h3>
      <p>{foo.data}</p>
      <p>{foo1.current.data}</p>
      <button
        type="button"
        onClick={() => {
          setFlag({});
        }}
      >
        Rerender
      </button>
    </>
  );
}
