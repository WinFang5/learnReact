// 轮询
import { useRequest } from 'ahooks';
import Mock from 'mockjs';

// 获取名字
function getUsername() {
  return new Promise((res) => {
    setTimeout(() => {
      res(Mock.mock('@name'));
    }, 1000);
  });
}

export default function PollingIntervalTest() {
  // const { data, loading, run, cancel } = useRequest(getUsername, {
  //   pollingInterval: 1000,
  //   pollingWhenHidden: false,
  // });
  const aa = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
  });
  // console.log(
  //   'useRequest',
  //   useRequest(getUsername, {
  //     pollingInterval: 1000,
  //     pollingWhenHidden: false,
  //   }),
  // );
  console.log('aa', aa);
  return (
    <>
      <p>Username: {aa.loading ? 'Loading' : (aa.data as string)}</p>
      <button onClick={aa.run}>start</button>
      <button onClick={aa.cancel}>stop</button>
    </>
  );
}
