import { generatePath } from 'umi';

export default function TestPage() {
  return (
    <>
      <p>{'generatePath("/users/:id", { id: "42" })'}——————————{generatePath("/users/:id", { id: "42" })}</p>
    </>
  );
}
