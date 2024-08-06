import { PageContainer } from '@ant-design/pro-components';
import { useEffect ,useState, useRef} from 'react';
import VideoPlayer from './components/VideoPlayer';
import ChatMain from './components/ChatMain';

export default function TestPage() {
  // useEffect(() => {
  //   console.log('componentDidMount');
  //   return () => {
  //     console.log('componentWillUnmount');
  //   };
  // }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');
  return (
    <PageContainer ghost>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '暂停' : '播放'}
      </button>
      <input value={text} onChange={e => setText(e.target.value)} />
      <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={isPlaying} />
      <ChatMain />
    </PageContainer>
  );
}