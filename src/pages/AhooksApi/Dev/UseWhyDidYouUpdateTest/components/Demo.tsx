import { useWhyDidYouUpdate } from 'ahooks';
import React, { useState } from 'react';

const Demo: React.FC<{ count: number }> = (props) => {
  const [randomNum, setRandomNum] = useState(Math.random());
  useWhyDidYouUpdate('useWhyDidYouUpdateComponent', { ...props, randomNum });

  return (
    <>
      <div>
        <span>number: {props.count}</span>
      </div>
      <div>
        randomNum: {randomNum}
        <button
          onClick={() => setRandomNum(Math.random)}
          style={{ marginLeft: 8 }}
        >
          🎲
        </button>
      </div>
    </>
  );
};
export default Demo;
