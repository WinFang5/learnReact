import { PageContainer } from '@ant-design/pro-components';
import { Outlet } from 'umi';
import CreateSearchParams from './components/CreateSearchParams';
import GeneratePath from './components/GeneratePath';
import HelmetTest from './components/HelmetTest';
import HistoryT from './components/HistoryT';
import LinkT from './components/LinkT';
import MatchPathT from './components/MatchPathT';
import MatchRoutesT from './components/MatchRoutesT';
import NavLinkT from './components/NavLinkT';
import TerminalTest from './components/TerminalTest';
import UseAppDataT from './components/UseAppDataT';
import UseLocationT from './components/UseLocationT';
import UseNavigateT from './components/UseNavigateT';
import { useOutlet } from 'umi';
import UseParamsT from './components/UseParamsT'
import UseResolvedPathT from './components/UseResolvedPathT'
import UseRouteDataTest from './components/UseRouteDataTest'
import UseRoutePropsTest from './components/UseRoutePropsTest'
import UseSelectedRoutesTest from './components/UseSelectedRoutesTest'

export default function TestPage() {
  return (
    <PageContainer ghost>
      <h2>CreateSearchParams</h2>
      <CreateSearchParams />
      <hr />
      <h2>GeneratePath</h2>
      <GeneratePath />
      <hr />
      <h2>HelmetTest</h2>
      <HelmetTest />
      <hr />
      <h2>UseLocationT</h2>
      <UseLocationT />
      <hr />
      <h2>HistoryT</h2>
      <HistoryT />
      <hr />
      <h2>LinkT</h2>
      <LinkT />
      <hr />
      <h2>MatchPathT</h2>
      <MatchPathT />
      <hr />
      <h2>MatchRoutesT</h2>
      <MatchRoutesT />
      <hr />
      <h2>NavLinkT</h2>
      <NavLinkT />
      <Outlet context={{ prop: 'from UmiApi'}} />
      {/* {useOutlet()} */}
      <hr />
      <h2>TerminalT</h2>
      <TerminalTest />
      <hr />
      <h2>UseAppDataT</h2>
      <UseAppDataT />
      <hr />
      <h2>UseNavigateT</h2>
      <UseNavigateT />
      <hr />
      <h2>UseParamsT</h2>
      <UseParamsT />
      <hr />
      <h2>UseResolvedPathT</h2>
      <UseResolvedPathT />
      <hr />
      <h2>UseRouteDataTest</h2>
      <UseRouteDataTest />
      <hr />
      <h2>UseRoutePropsTest</h2>
      <UseRoutePropsTest />
      <hr />
      <h2>UseSelectedRoutesTest</h2>
      <UseSelectedRoutesTest />
    </PageContainer>
  );
}
