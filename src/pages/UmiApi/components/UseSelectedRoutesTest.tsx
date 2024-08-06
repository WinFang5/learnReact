import { useSelectedRoutes } from "umi";
export default function UseSelectedRoutesTest() {
  const selectedRoutes = useSelectedRoutes();
  const lastRoute = selectedRoutes.at(-1)
  console.log("🚀 ~ UseSelectedRoutesTest ~ selectedRoutes:", selectedRoutes)
  console.log("🚀 ~ UseSelectedRoutesTest ~ lastRoute:", lastRoute)
  return (
    <>
      <p>
        用于读取当前路径命中的所有路由信息。比如在 layout
        布局中可以获取到当前命中的所有子路由信息，同时可以获取到在 routes
        配置中的参数，这格外有用。
      </p>
    </>
  );
}
