import { createRouter, createWebHashHistory } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import { useCookies } from '@vueuse/integrations/useCookies';

const cookies = useCookies();

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'front',
      component: () => import('../views/front/FrontView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/front/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/front/AboutView.vue'),
        },
        {
          path: '/products',
          name: 'products',
          component: () => import('../views/front/ProductsView.vue'),
        },
        {
          path: '/products/:id',
          name: 'product',
          component: () => import('../views/front/ProductView.vue'),
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('../views/front/OrderView.vue'),
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
          beforeEnter: (to, from, next) => {
            if (cookies.get('hexToken')) {
              return false;
            } else {
              next();
            }
          },
        },
      ],
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue'),
      children: [
        {
          path: 'products',
          name: 'adminProducts',
          component: () => import('../views/admin/AdminProductsView.vue'),
        },
        {
          path: 'orders',
          name: 'adminOrders',
          component: () => import('../views/admin/AdminOrdersView.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !cookies.get('hexToken')) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
