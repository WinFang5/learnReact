import { useHistoryTravel } from 'ahooks';
export default function UseHistoryTravelTest() {
  const { value, setValue, backLength, forwardLength, back, forward } = useHistoryTravel<string>('winfang',3);
  // console.log("🚀 ~ UseHistoryTravelTest ~ useHistoryTravel<string>():", useHistoryTravel<string>())
  
  return <>
     <input value={value || ''} onChange={(e) => setValue(e.target.value)} />
     <button disabled={backLength<=0} onClick={back} >back</button>
     <button disabled={forwardLength<=0} onClick={forward} >forward</button>
     <p>{value}</p>
  </>
}
