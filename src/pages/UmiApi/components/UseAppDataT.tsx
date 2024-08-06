import { useAppData } from "umi"
export default function UseAppDataT(){
  const appData = useAppData()
  console.log("🚀 ~ UseAppDataT ~ appData:", appData)
  return (
    <>
      <p>UseAppDataT</p>
    </>
  )
}