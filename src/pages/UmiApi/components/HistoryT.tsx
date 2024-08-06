import {history} from 'umi';

export default function HistoryT() {
  console.log("🚀 ~ HistoryT ~ history", history)
  return (
    <>
      {/* // 跳转到指定路由 */}
      <button onClick={() => history.push('/test')}>跳转到指定路由(test)</button>
      {/* 带参数跳转到指定路由 */}
      <button onClick={()=>history.push('/test?name=historyT','www')}>带参数跳转到指定路由(test?name=historyT,state为www)</button>
      {/* // 跳转当前路径，并刷新 state */}
      <button onClick={() => history.push(history.location.pathname, 'hhh')}>跳转当前路径，并刷新 state</button>
      {/* // 返回上一页 */}
      <button onClick={() => history.back()}>返回上一页</button>
    </>
  );
}