import MessageBox from './components/MessageBox';
import {useEventEmitter} from 'ahooks'
import InputBox from './components/InputBox';
export default function UseEventEmitterTest() {
  const focus$ = useEventEmitter();
  return (
    <>
      <h3>
        在多个组件之间进行事件通知有时会让人非常头疼，借助 EventEmitter
        ，可以让这一过程变得更加简单。
      </h3>
      <MessageBox focus$={focus$}/>
      <InputBox focus$={focus$}/>
    </>
  );
}
