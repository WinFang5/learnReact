import { useResolvedPath } from 'umi';

export default function UseResolvedPathT() {
  const path = useResolvedPath('messages');
  const path2 = useResolvedPath('blog');
  console.log("🚀 ~ UseResolvedPathT ~ path:", path)

  return (
    <>
      <p>useResolvedPath 根据当前路径将目标地址(messages)解析出完整的路由信息:{path.pathname}</p>
      <p>useResolvedPath 根据当前路径将目标地址(blog)解析出完整的路由信息:{path2.pathname}</p>
    </>
  );
}
