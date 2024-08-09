import { defineConfig } from '@umijs/max';
import ahooksRoutes from './src/routes/ahooksRoutes';

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
      routes: ahooksRoutes,
    },
  ],
  npmClient: 'pnpm',
});
