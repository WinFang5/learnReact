import { useUnmount } from 'ahooks';
import { message } from 'antd';
import { useEffect } from 'react';
export default function UseUnmountTest (){
  const [messageApi, contextHolder] = message.useMessage();

  useUnmount(() => {
    console.log('unmount');
  });

  useEffect(() => {
    return () => {
      messageApi.info('拜拜!');
    };
  });
  return <div>{contextHolder}UseUnmountTest</div>;
}