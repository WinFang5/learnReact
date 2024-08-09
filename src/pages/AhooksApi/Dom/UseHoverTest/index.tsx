import React, { useEffect, useRef } from 'react';
import { useHover } from 'ahooks';

export default function UseHoverTest() {
  const ref = useRef(null);
  const isHovering = useHover(ref); 
  useEffect(()=>{
    if(isHovering) console.log('hovering');
    return ()=>{
      console.log('baibai')
    }
  },[isHovering])
  return (
    <>
      <h3 ref={ref}>监听 DOM 元素是否有鼠标悬停。试试鼠标移到我这</h3>
    </>
  );
}
