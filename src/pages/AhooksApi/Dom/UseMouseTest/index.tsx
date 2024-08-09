import { useMouse } from 'ahooks';
export default function UseMouseTest() {
  const mouse = useMouse();

  return (
    <>
      <h3>监听鼠标位置</h3>
      <p>
        Client - x: {mouse.clientX}, y: {mouse.clientY}
      </p>
      <p>
        Page - x: {mouse.pageX}, y: {mouse.pageY}
      </p>
      <p>
        Screen - x: {mouse.screenX}, y: {mouse.screenY}
      </p>  
    </>
  );
}
