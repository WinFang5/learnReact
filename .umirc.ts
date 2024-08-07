import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' test',
      path: '/test',
      component: './Test',
    },
    {
      name: 'context例子',
      path: '/contexttest',
      component: './ContextTest',
    },
    {
      name: 'ref例子',
      path: '/reftest',
      component: './RefTest',
    },
    {
      name: 'Effect例子',
      path: '/effecttest',
      component: './EffectTest',
    },
    {
      name: 'umiapi',
      path: '/umiapi',
      component: './UmiApi',
      routes: [
        {
          path: '/umiapi/messages',
          component: './UmiApi/Messages',
          custom_name: 'messages',
        },
        { path: '/umiapi/tasks', component: './UmiApi/Tasks' },
        { path: '/umiapi/blog', component: './UmiApi/Blog' },
      ],
      custom_name: 'umiapi',
    },
    {
      name: 'ahooks使用例子',
      path: '/ahooks',
      component: './AhooksApi',
      routes: [
        {
          path: '/ahooks/loadingdelay',
          component: './AhooksApi/UseRequest/LoadingDelayTest',
        },
        {
          path: '/ahooks/pollingInterval',
          component: './AhooksApi/UseRequest/PollingIntervalTest',
        },
        {
          path: '/ahooks/useantdtable',
          component: './AhooksApi/Scene/UseAntdTableTest',
        },
        {
          path: '/ahooks/usefusiontable',
          component: './AhooksApi/Scene/UseFusionTableTest',
        },
        {
          path: '/ahooks/useinfinitescroll',
          component: './AhooksApi/Scene/UseInfiniteScrollTest',
        },
        {
          path: '/ahooks/usepagination',
          component: './AhooksApi/Scene/UsePaginationTest',
        },
        {
          path: '/ahooks/usedynamiclist',
          component: './AhooksApi/Scene/UseDynamicListTest',
        },
        {
          path: '/ahooks/usevirtuallist',
          component: './AhooksApi/Scene/UseVirtualListTest',
        },
        {
          path: '/ahooks/usehistorytravel',
          component: './AhooksApi/Scene/UseHistoryTravelTest',
        },
        {
          path: '/ahooks/usenetwork',
          component: './AhooksApi/Scene/UseNetworkTest',
        },
        {
          path: '/ahooks/useselections',
          component: './AhooksApi/Scene/UseSelectionsTest',
        },
        {
          path: '/ahooks/usecountdown',
          component: './AhooksApi/Scene/UseCountDownTest',
        },
        {
          path: '/ahooks/usecounter',
          component: './AhooksApi/Scene/UseCounterTest',
        },
        {
          path: '/ahooks/usetextselection',
          component: './AhooksApi/Scene/UseTextSelectionTest',
        },
        {
          path: '/ahooks/usewebsocket',
          component: './AhooksApi/Scene/UseWebSocketTest',
        },
        {
          path: '/ahooks/usemount',
          component: './AhooksApi/LifeCycle/UseMountTest',
        },
        {
          path: '/ahooks/useunmount',
          component: './AhooksApi/LifeCycle/UseUnmountTest',
        },
        {
          path: '/ahooks/useunmountedref',
          component: './AhooksApi/LifeCycle/UseUnmountedRefTest',
        },
        {
          path: '/ahooks/usesetstate',
          component: './AhooksApi/State/UseSetStateTest',
        },
        {
          path: '/ahooks/useboolean',
          component: './AhooksApi/State/UseBooleanTest',
        },
        {
          path: '/ahooks/usetoggle',
          component: './AhooksApi/State/UseToggleTest',
        },
        {
          path: '/ahooks/useurlstate',
          component: './AhooksApi/State/UseUrlStateTest',
        },
        {
          path: '/ahooks/usecookiestate',
          component: './AhooksApi/State/UseCookieStateTest',
        },
        {
          path: '/ahooks/uselocalstoragestate',
          component: './AhooksApi/State/UseLocalStorageStateTest',
        },
        {
          path: '/ahooks/usesessionstoragestate',
          component: './AhooksApi/State/UseSessionStorageStateTest',
        },
        {
          path: '/ahooks/usedebounce',
          component: './AhooksApi/State/UseDebounceTest',
        },
        {
          path: '/ahooks/usethrottle',
          component: './AhooksApi/State/UseThrottleTest',
        },
        {
          path: '/ahooks/usemap',
          component: './AhooksApi/State/UseMapTest',
        },
        {
          path: '/ahooks/useset',
          component: './AhooksApi/State/UseSetTest',
        },
        {
          path: '/ahooks/useprevious',
          component: './AhooksApi/State/UsePreviousTest',
        },
        {
          path: '/ahooks/userafstate',
          component: './AhooksApi/State/UseRafStateTest',
        },
        {
          path: '/ahooks/useSafeState',
          component: './AhooksApi/State/UseSafeStateTest',
        },
        {
          path: '/ahooks/useGetState',
          component: './AhooksApi/State/UseGetStateTest',
        },
        {
          path: '/ahooks/useResetState',
          component: './AhooksApi/State/UseResetStateTest',
        },
        {
          path: '/ahooks/useUpdateEffect',
          component: './AhooksApi/Effect/UseUpdateEffectTest',
        },
        {
          path: '/ahooks/useUpdateLayoutEffect',
          component: './AhooksApi/Effect/UseUpdateLayoutEffectTest',
        },
      ]
    },
  ],
  npmClient: 'pnpm',
});
