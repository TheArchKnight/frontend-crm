<template>
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNav">

            <div class="navbar-nav">
               <img :src="logo" class="logo">
               <router-link class="nav-link" :to="{name: 'customerList'}" v-if="loginStore.authUser">Clientes</router-link>  
            </div>
            <div class="navbar-nav ms-auto">
               <form class="d-flex" role="search" method="post" action="{{lista_url}}" v-if="loginStore.authUser">
                  <input class="form-control me-2" type="search" aria-label="Search" name="searched">
                  <select name="filtro" class="form-select">
                     <option value="nombre">Nombre</option>
                     <option value="nit">NIT</option>
                     <option value="administrador">Administrador</option>
                  </select>
               </form>
               <span class="navbar-text mx-3" v-if="loginStore.authUser">Perfil: {{loginStore.authUser}} </span> 
               <a class ="mx-3  nav-link" href="" @click="loginStore.logOut" v-if="loginStore.authUser">Cerrar sesion</a>
               <router-link class="nav-link" :to="{name: 'signUp'}" v-if="!loginStore.authUser">Registrarse</router-link>
            </div>
         </div>
      </div>
   </nav>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
const logo = require('@/images/logo-doctor-clean.png')
const loginStore = useAuthStore()
</script>


<style>
img.logo{
   padding-left: 10px;
   width: 120px;
   height: 40px;
}
</style>
