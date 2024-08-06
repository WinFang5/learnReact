import { Link } from 'umi';

export default function LinkT() {
  return (
    <>
      <Link to="/test">去test页面</Link>
      <br />
      <Link to="/test" >
        去test页面(replace)
      </Link>
      <br />
      <Link to="/test" prefetch>
        去test页面(prefetch)
      </Link>
      <br />
      {/* <Link  reloadDocument>去test页面(reloadDocument)</Link> */}
    </>
  );
}
