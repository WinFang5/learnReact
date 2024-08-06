import { matchPath } from 'umi';

export default function MatchPathT() {
  const match = matchPath({ path: '/users/:id' }, '/users/123');
  console.log('🚀 ~ MatchPathT ~ match:', match);
  return <>MatchPathT</>;
}
