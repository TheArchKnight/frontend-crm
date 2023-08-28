import {createRouter, createWebHashHistory} from 'vue-router'
import { useAuthStore } from './stores/auth'
import ClientList from './views/ClientList'
import ClientDetail from './views/ClientDetail'
import CustomerCrate from './views/CustomerCreate'
import LogIn from './views/LogIn'
import SignUp from './views/SignUp'
//componentes o views
//
//definir objetos de rutas

const routes = [
   {
      path:'/clientes',
      name: 'customerList',
      component: ClientList,
      meta: {requiresAuth: true}
   },
   {
      path:'/clientes/detail/:id', 
      name: 'customerDetail',
      component:ClientDetail, 
      meta: {requiresAuth: true}
   },
   {
      path: '/clientes/crear',
      name: 'customerCreate',
      component: CustomerCrate,
      meta: {requiresAuth: true}
   },
   {
      path: '/signup/',
      name: 'signUp',
      component: SignUp
   },
   {
      path: '/',
      name: 'login',
      component:LogIn,
   }
]

//Crear objeto rutas de vue router
const router = createRouter({
   history: createWebHashHistory(),
   routes,
})

router.beforeEach(async (to, from, next) => {
  const authStore = await useAuthStore();
  if (to.meta.requiresAuth && !authStore.authUser) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
