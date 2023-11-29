import { createRouter, createWebHistory } from 'vue-router';
import Practice from './Practice.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => Practice,
    },
  ],
});
