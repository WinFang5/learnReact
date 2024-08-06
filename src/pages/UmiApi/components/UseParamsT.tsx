import { useParams,terminal }  from 'umi';

export default function UseParamsT() {
  const params = useParams();
  console.log('🚀 ~ UseParamsT ~ params:', params);
  terminal.log('useParams 用于获取动态路由参数。',params)
  return (
    <>
      <p>UseParamsT</p>
      <p>useParams 用于获取动态路由参数。</p>
    </>
  );
}