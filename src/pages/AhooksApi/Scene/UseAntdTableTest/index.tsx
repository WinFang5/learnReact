import { useAntdTable } from 'ahooks';
import { Table } from 'antd';

interface Item {
  name: {
    last: string;
  };
  email: string;
  phone: string;
  gender: 'male' | 'female';
}

interface Result {
  total: number;
  list: Item[];
}

const getTableData = ({
  current,
  pageSize,
}: {
  current: any;
  pageSize: any;
}): Promise<Result> => {
  const query = `page=${current}&size=${pageSize}`;

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: res.info.results,
      list: res.results,
    }));
};
export default function UseAntdTableTest() {
  const { tableProps } = useAntdTable(getTableData);
  const columns = [
    {
      title: 'name',
      dataIndex: ['name', 'last'],
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
    },
    {
      title: 'gender',
      dataIndex: 'gender',
    },
  ];
  // console.log('useAntdTable(getTableData)',useAntdTable(getTableData))
  return (
    <>
      <Table rowKey="email" columns={columns} {...tableProps}/>
    </>
  )
}
