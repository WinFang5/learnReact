import { PageContainer } from '@ant-design/pro-components';
import Avatar from './components/Avatar';
import ListenHistoryT from './components/ListenHistoryT';
import PackingList from './components/PackingList';

function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}

export default function TestPage() {
  return (
    <PageContainer ghost>
      <Card>
        <Avatar
          size={100}
          person={{
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2',
          }}
        />
      </Card>
      <PackingList />
      <hr />
      <h2>ListenHistoryT</h2>
      <ListenHistoryT />
    </PageContainer>
  );
}
