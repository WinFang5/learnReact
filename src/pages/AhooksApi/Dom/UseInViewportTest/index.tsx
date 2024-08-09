import React, { useRef } from 'react';
import { useInViewport } from 'ahooks';

export default function UseInViewportTest(){
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  return (
    <>
      <h3>观察元素是否在可见区域，以及元素可见比例。更多信息参考 Intersection Observer API。</h3>
      <div style={{ width: 300, height: 300, overflow: 'scroll', border: '1px solid' }}>
        scroll here
        <div style={{ height: 800 }}>
          <div
            ref={ref}
            style={{
              border: '1px solid',
              height: 100,
              width: 100,
              textAlign: 'center',
              marginTop: 80,
            }}
          >
            observer dom
          </div>
        </div>
      </div>  
      <div style={{ marginTop: 16, color: inViewport ? '#87d068' : '#f50' }}>
        inViewport: {inViewport ? 'visible' : 'hidden'}
      </div>
    </>
  )
}