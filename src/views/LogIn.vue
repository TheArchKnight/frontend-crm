<template>
   <div class="d-flex flex-column justify-content-center align-align-items-center col-3 mx-auto" style="" >
      <img :src="logo" alt="">
      <form @submit="handleSubmit">
         <label for="username">Usuario:</label>
         <input type="text" id="username" name="username" class="form-control" v-model="username">
         <label for="password">Contraseña:</label>
         <input type="password" id="password" name="password" class="form-control" v-model="password">
         <div class="my-3 mx-auto col-2"> <button type="submit" class="btn btn-success">Iniciar Sesion</button></div>
      </form>
   </div>
</template>

<script setup>
   import {useAuthStore} from '../stores/auth'
   const logo = require('@/images/logo-doctor-clean.png')
   let username, password
   const loginStore = useAuthStore()

   function handleSubmit(event){
      event.preventDefault();
      loginStore.getUser(username, password);
   }
</script>

<style>
</style>
