import { createSearchParams } from 'umi';
export default function CreateSearchParams() {
  console.log('createSearchParams("foo=1&bar=2")',createSearchParams("foo=1&bar=2").toString())
  console.log("🚀 ~ CreateSearchParams ~ createSearchParams", createSearchParams("?foo=1&bar=2").toString())
  console.log("🚀 ~ CreateSearchParams ~ createSearchParams", createSearchParams([["foo", "1"], ["bar", "2"]]).toString())
  return (
    <>
      <p>{createSearchParams("foo=1&bar=2")}</p>
      <p>{createSearchParams("?foo=1&bar=2")}</p>
      <p>{createSearchParams({ foo: 'bar', qux: 'qoo'})}</p>
      <p>{createSearchParams({ foo: 'bar', qux: 'qoo'}).toString()}</p>
    </>
  );
}
