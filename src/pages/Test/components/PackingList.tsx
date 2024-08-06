// 条件渲染组件案例
function Item({ name, isPacked }: { name: string; isPacked: boolean }) {
  // return <li className="item">{name}</li>;

  // 1 if-else
  // if(isPacked) {
  //     return <li className="item">{name}✔</li>
  // }else {
  //     return  <li className="item">{name}❌</li>
  // }

  // 2 三元运算符
//   return (
//     <li className="item">{isPacked ? <del>{name + '✔'}</del> : name + '❌'}</li>
//   );

  // 3 逻辑与 && 运算符
  return <li className="item">{name}{isPacked && '✔'}</li>
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride 的行李清单</h1>
      <ul>
        <Item isPacked={true} name="宇航服" />
        <Item isPacked={true} name="带金箔的头盔" />
        <Item isPacked={false} name="Tam 的照片" />
      </ul>
    </section>
  );
}
