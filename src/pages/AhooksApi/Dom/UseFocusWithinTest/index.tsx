import React, { useRef } from 'react';
import { useFocusWithin } from 'ahooks';
import { message } from 'antd';
export default function UseFocusWithinTest() {
  const ref = useRef(null);
  const isFocusWithin = useFocusWithin(ref, {
    onFocus: () => {
      message.info('focus');
    },
    onBlur: () => {
      message.info('blur');
    },
  });
  return (
    <>
      <h3>监听当前焦点是否在某个区域之内，同 css 属性 :focus-within。</h3>
      <div
        ref={ref}
        style={{
          padding: 16,
          backgroundColor: isFocusWithin ? 'red' : '',
          border: '1px solid gray',
        }}
      >
        <label style={{ display: 'block' }}>
          First Name: <input />
        </label>
        <label style={{ display: 'block', marginTop: 16 }}>
          Last Name: <input />
        </label>
      </div>
      <p>isFocusWithin: {JSON.stringify(isFocusWithin)}</p>
      
    </>
  );
}
