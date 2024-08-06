import { useRouteProps } from 'umi'

export default function UseRoutePropsTest(){
  const routeProps = useRouteProps()
  console.log("🚀 ~ UseRoutePropsTest ~ routeProps:", routeProps)
  return (
    <>
      <p>读取当前路由在路由配置里的 props 属性，你可以用此 hook 来获取路由配置中的额外信息。</p>
    </>
  )
}