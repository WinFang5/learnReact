import { useTextSelection } from 'ahooks';
import {useRef} from 'react';

export default function UseTextSelectionTest() {
  const refFF = useRef(null);
  const { text } = useTextSelection(refFF);
  return (
    <div ref={refFF}>
      <p>You can select text all page.</p>
      <p>Result：{text}</p>
    </div>
  );
}
