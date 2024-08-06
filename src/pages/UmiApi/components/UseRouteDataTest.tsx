import {useRouteData} from 'umi'

export default function UseRouteDataTest(){
  const data = useRouteData()
  console.log("🚀 ~ UseRouteDataTest ~ data:", data)
  return (
    <>
      useRouteData 返回当前匹配路由的数据的钩子函数。
    </>
  )
}