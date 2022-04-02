import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Front/FHomeView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Front/FProductsView.vue'),
      },
      {
        path: 'products/:id',
        component: () => import('../views/Front/FProductID.vue'),
      },
      {
        path: 'checkout',
        component: () => import('../views/Front/FCheckoutOrder.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'dashboard_home',
    component: () => import('../views/Dashboard/BHomeView.vue'),
    children: [
      {
        path: 'products',
        name: 'dashboard_Products',
        component: () => import('../views/Dashboard/BProductsView.vue'),
      },
      {
        path: 'orders',
        name: 'dashboard_Orders',
        component: () => import('../views/Dashboard/BOrdersView.vue'),
      },
      {
        path: 'coupon',
        name: 'dashboard_Coupon',
        component: () => import('../views/Dashboard/BCouponView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
});

export default router;
