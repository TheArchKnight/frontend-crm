import {createRouter, createWebHashHistory} from 'vue-router'
import ClientList from './views/ClientList'
import ClientDetail from './views/ClientDetail'
import CustomerCrate from './views/CustomerCreate'
import LogIn from './views/LogIn'
//componentes o views
//
//definir objetos de rutas

const routes = [
   {
      path:'/clientes', component: ClientList,
      name: 'customerList'
   },
   {
      path:'/clientes/detail', component:ClientDetail, 
      name: 'customerDetail',
   },
   {
      path: '/clientes/crear',
      name: 'customerCreate',
      component: CustomerCrate,
   },
   {
      path: '/', 
      component:LogIn,
   }
]

//Crear objeto rutas de vue router
const router = createRouter({
   history: createWebHashHistory(),
   routes,
})

export default router;
