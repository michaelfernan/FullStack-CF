import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/Home';
import NotaFiscalTable from '../views/NotasFiscais';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/notasfiscais',
    name: 'NotasFiscais',
    component: NotaFiscalTable,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
