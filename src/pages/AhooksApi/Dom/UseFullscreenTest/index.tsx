import { useFullscreen } from 'ahooks';
import { useRef } from 'react';

export default function UseFullscreenTest() {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] =
    useFullscreen(ref);

  return (
    <>
      <div ref={ref} style={{ background: 'white' }}>
        <h3>管理 DOM 全屏的 Hook。</h3>
        <div style={{ marginBottom: 16 }}>
          {isFullscreen ? 'Fullscreen' : 'Not fullscreen'}
        </div>
        <div>
          <button type="button" onClick={enterFullscreen}>
            enterFullscreen
          </button>
          <button
            type="button"
            onClick={exitFullscreen}
            style={{ margin: '0 8px' }}
          >
            exitFullscreen
          </button>
          <button type="button" onClick={toggleFullscreen}>
            toggleFullscreen
          </button>
        </div>
      </div>
    </>
  );
}
