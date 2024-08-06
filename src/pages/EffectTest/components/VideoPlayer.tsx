import { useEffect ,useState, useRef} from 'react';
export default function VideoPlayer({
  src,
  isPlaying,
}: {
  src: string;
  isPlaying: boolean;
}) {
  const ref = useRef<any | null>(null);
  // if (isPlaying && ref.current) {
  //   ref.current.play(); // 渲染期间不能调用 `play()`。
  // } else if (!isPlaying && ref.current) {
  //   ref.current.pause(); // 同样，调用 `pause()` 也不行。
  // }

  useEffect(() => {

    if (isPlaying && ref.current) {
      console.log('调用 video.play()');
      ref.current.play();
    } else if(!isPlaying && ref.current) {
      console.log('调用 video.pause()');
      ref.current.pause();
    }
  },[isPlaying]);

  // if (isPlaying && ref.current) {
  //   ref.current.play();
  // } else if(!isPlaying && ref.current) {
  //   ref.current.pause();
  // }

  return <video src={src} ref={ref} loop playsInline></video>;
}
