import { useNavigate } from 'umi';

export default function UseNavigateT() {
  let navigate = useNavigate()
  return (
    <>
      <button onClick={()=>navigate("/test", { replace: true })}>
        提交
      </button>
      <button onClick={()=>navigate(-1)}>
        返回上一页
      </button>
    </>
  )
}