import { EventEmitter } from 'ahooks/lib/useEventEmitter';
import { FC } from 'react';

const MessageBox: FC<{
  focus$: EventEmitter<void>;
}> = function (props) {
  return (
    <>
      <button
        type="button"
        onClick={() => {
          props.focus$.emit();
        }}
      >
        Reply
      </button>
    </>
  );
};

export default MessageBox;
