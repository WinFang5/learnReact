import { useMount } from 'ahooks';
import { message } from 'antd';

export default function UseMountTest() {
  const [messageApi, contextHolder] = message.useMessage();

  useMount(() => {
    messageApi.info('Hello, Ant Design!');
  });

  return <div>{contextHolder}UseMountTest</div>;
}
