export default function UseUpdateLayoutEffectTest() {
  return (
    <>
      <h3>
        useUpdateLayoutEffect 用法等同于
        useLayoutEffect，但是会忽略首次执行，只在依赖更新时执行。
      </h3>
    </>
  );
}
