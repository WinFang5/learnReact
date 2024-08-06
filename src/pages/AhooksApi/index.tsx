import { PageContainer } from '@ant-design/pro-components';
import { Outlet } from 'umi';
import Nav from './components/Nav'


export default function TestPage() {
  return (
    <PageContainer ghost>
      <Nav />
      <Outlet />
    </PageContainer>
  );
}
