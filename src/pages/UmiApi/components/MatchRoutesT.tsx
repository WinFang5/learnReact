import { matchRoutes } from 'umi';
export default function MatchRoutesT() {
  const match = matchRoutes(
    [
      {
        path: '/users/:id',
      },
      {
        path: '/users/:id/posts/:postId',
      },
    ],
    '/users/123/posts/456',
  );
  console.log('🚀 ~ MatchRoutesT ~ match:', match);
  return <>MatchRoutesT</>;
}
