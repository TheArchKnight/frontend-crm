import {createRouter, createWebHashHistory} from 'vue-router'
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
   },
   {
      path:'/clientes/detail', 
      name: 'customerDetail',
      component:ClientDetail, 

   },
   {
      path: '/clientes/crear',
      name: 'customerCreate',
      component: CustomerCrate,
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

export default router;
