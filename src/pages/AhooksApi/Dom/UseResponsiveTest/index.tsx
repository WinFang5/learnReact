import React from 'react';
import { configResponsive, useResponsive } from 'ahooks';

configResponsive({
  small: 0,
  middle: 800,
  large: 1200,
});
export default function UseResponsiveTest() {
  const responsive = useResponsive();
  console.log('responsive', Object.keys(responsive));

  return (
    <>
      <h3>获取响应式信息。5555</h3>
      <p>Please change the width of the browser window to see the effect: </p>
      {Object.keys(responsive).map((key) => (
        <p key={key}>
          {key} {responsive[key] ? '✔' : '✘'}
        </p>
      ))}
    </>
  );
}
