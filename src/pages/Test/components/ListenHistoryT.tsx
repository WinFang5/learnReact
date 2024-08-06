import { useLocation } from 'umi';

export default function ListenHistoryT() {
  let location = useLocation();
  console.log("🚀 ~ ListenHistoryT ~ location:", location)
  return (
    <>
      <p>ListenHistoryT</p>
    </>
  )
}
