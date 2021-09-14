
const routes = [
  { path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: () => import('layouts/Home.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
