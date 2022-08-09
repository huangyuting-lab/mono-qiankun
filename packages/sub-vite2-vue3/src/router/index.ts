const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../App.vue')
  },
  {
    path: '/sub-vite2-vue3',
    name: 'sub-Home',
    component: () => import('../App.vue')
  }
];

export default routes;
