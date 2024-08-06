import { useVirtualList } from 'ahooks';
import { useMemo, useRef } from 'react';

export default function UseVirtualListTest() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const originalList = useMemo(() => Array.from(Array(99999999).keys()), []);
  // const originalList = Array.from(Array(99999999).keys())
  // console.log("🚀 ~ UseVirtualListTest ~ originalList:", originalList)
  const [list] = useVirtualList(originalList, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 60,
    overscan: 10,
  });

  // console.log('🚀 ~ UseVirtualListTest ~ list:', list);
  return (
    <>
      <div
        ref={containerRef}
        style={{ height: '300px', overflow: 'auto', border: '1px solid' }}
      >
        <div ref={wrapperRef}>
          {list.map((ele) => (
            <div
              style={{
                height: 52,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #e8e8e8',
                marginBottom: 8,
              }}
              key={ele.index}
            >
              Row: {ele.data}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
