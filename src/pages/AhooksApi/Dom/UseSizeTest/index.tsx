import { useSize } from 'ahooks';
import { useRef } from 'react';
export default function UseSizeTest() {
  const ref = useRef(null);
  const size = useSize(ref);
  return (
    <>
      <h3>监听 DOM 节点尺寸变化的 Hook。</h3>
      <div ref={ref}>
        <p>Try to resize the preview window </p>
        <p>
          width: {size?.width}px, height: {size?.height}px
        </p>
      </div>
    </>
  );
}
