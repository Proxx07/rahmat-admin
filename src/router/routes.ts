import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [

  {
    path: '/',
    name: 'main',
    component: () => import('@/pages/MainPage.vue'),
  },

  {
    path: '/status/:type',
    name: 'status',
    component: () => import('@/pages/StatusPage.vue'),
  },

  {
    path: '/example',
    name: 'example',
    component: () => import.meta.env.PROD ? import('@/pages/Example.vue') : import('@/pages/Page404.vue'),
    meta: {
      layout: 'Default',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/pages/Page404.vue'),
    meta: {
      layout: 'Empty',
    },
  },
];

export default routes;
