import { useEventTarget } from 'ahooks';
export default function UseEventTargetTest() {
  const [value, { reset, onChange }] = useEventTarget({ initialValue: 'this is initial value' }); 
  return (
    <>
      <h3>
        常见表单控件(通过 e.target.value 获取表单值) 的 onChange 跟 value
        逻辑封装，支持自定义值转换和重置功能。
      </h3>
      <input value={value} onChange={onChange} style={{ width: 200, marginRight: 20 }} />
      <button type="button" onClick={reset}>
        reset
      </button>
    </>
  );  
}
