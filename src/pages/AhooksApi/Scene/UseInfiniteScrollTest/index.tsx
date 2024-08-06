import { useInfiniteScroll, useRequest } from 'ahooks';
import { useRef } from 'react';
interface Result {
  list: string[];
  nextId: string | undefined;
}
const resultData = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
];
function getLoadMoreList(
  nextId: string | undefined,
  limit: number,
): Promise<Result> {
  let start = 0;
  if (nextId) {
    start = resultData.findIndex((i) => i === nextId);
  }

  const end = start + limit;
  const list = resultData.slice(start, end);
  const nId = resultData.length >= end ? resultData[end] : undefined;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        list,
        nextId: nId,
      });
    }, 1000);
  });
}

// 删除数据（只是弄个延时异步）
function deleteItem() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export default function UseInfiniteScrollTest() {
  const ref = useRef<HTMLDivElement>(null);

  const { data, loading, loadMore, loadingMore, mutate } = useInfiniteScroll(
    (d) => getLoadMoreList(d?.nextId, 4),
  );

  const {
    loading: deleteLading,
    params: deleteParams,
    run: remove,
  } = useRequest(deleteItem, {
    manual: true,
    onSuccess: (_, [id]) => {
      console.log('onSuccess', id);
      if (data) {
        console.log('data', data);
        const index = data.list.findIndex((i) => i === id);
        data?.list.splice(index, 1);
        console.log('mutate', data);
        mutate({ ...data });
      }
    },
  });

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <div>
          {data?.list?.map((item) => (
            <div
              key={item}
              style={{ padding: 12, border: '1px solid #f5f5f5' }}
            >
              item-{item}
              <button
                style={{ marginLeft: 8 }}
                onClick={() => remove(item)}
                disabled={deleteLading && deleteParams[0] === item}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
      <div style={{ marginTop: 8 }}>
        {data?.nextId && (
          <button type="button" onClick={loadMore} disabled={loadingMore}>
            {loadingMore ? 'Loading more...' : 'Click to load more'}
          </button>
        )}

        {!data?.nextId && <span>No more data</span>}
      </div>
    </div>
  );
}
