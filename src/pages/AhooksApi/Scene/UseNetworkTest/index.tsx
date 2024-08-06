import { useNetwork } from 'ahooks';

export default function UseNetworkTest(){
  const networkState = useNetwork();
  console.log("🚀 ~ UseNetworkTest ~ networkState:", networkState)
  return <div>
    <pre>{JSON.stringify(networkState,['saveData','downlink'],2)}</pre>
  </div>
}