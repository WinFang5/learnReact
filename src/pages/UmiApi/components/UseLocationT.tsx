import { useLocation } from 'umi';

export default function UseLocationT() {
  let location = useLocation();
  console.log("🚀 ~ UseLocationT ~ location", location)
  return (
    <>
      <p>location.pathname:{location.pathname}</p>
      <p>location.search:{location.search}</p>
      <p>location.hash:{location.hash}</p>
    </>
  );
}
