import { useRequest } from 'ahooks';
import Mock from 'mockjs';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name')); // 随机生成姓名
    }, 200);
  });
}

export default function LoadingDelayTest() {
  // 不实用loadingDelay的action
  const action = useRequest(getUsername);

  // 使用loadingDelay的action
  const withLoadingDelayAction = useRequest(getUsername, {
    loadingDelay: 300,
  });

  // 触发器
  const trigger = () => {
    action.run();
    withLoadingDelayAction.run();
    console.log(
      '🚀 ~ trigger ~ withLoadingDelayAction:',
      withLoadingDelayAction,
    );
    console.log('🚀 ~ trigger ~ action:', action);
  };

  return (
    <>
      <button onClick={() => trigger()}>生成随机名字</button>
      <p>不实用loadingDelay的action:{action.loading?'loading...':action.data}</p>
      <p>使用loadingDelay的action:{withLoadingDelayAction.loading?'loading...':withLoadingDelayAction.data}</p>
    </>
  );
}
