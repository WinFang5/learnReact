import { useRafState } from 'ahooks';
import  { useEffect } from 'react';
export default function UseRafStateTest(){
  const [state, setState] = useRafState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const onResize = () => {
      setState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };
    onResize();
    window.addEventListener('resize',onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return (
    <>
      <h3>只在 requestAnimationFrame callback 时更新 state，一般用于性能优化。</h3>
      <p>Try to resize the window </p>
      current: {JSON.stringify(state)}

    </>
  )
}