import { EventEmitter } from 'ahooks/lib/useEventEmitter';
import { FC, useRef } from 'react';

const InputBox: FC<{
  focus$: EventEmitter<void>;
}> = function (props) {
  const inputRef = useRef<any>();
  props.focus$.useSubscription(() => {
    console.log('inputRef',inputRef)
    inputRef.current.focus();
  });
  return (
    <>
      <input
        ref={inputRef}
        placeholder="Enter reply"
        style={{ width: '100%', padding: '4px' }}
      />
    </>
  );
};

export default InputBox;