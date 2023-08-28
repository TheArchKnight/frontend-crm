<template>
   <div class="d-flex flex-column justify-content-center align-align-items-center col-4 mx-auto" style="" >
      <form @submit="handleSubmit">
         <label for="username">Nombre de usuario:</label>
         <input type="text" class="form-control" id="username" v-model="user.username" required>

         <label for="customers">Clientes:  ' </label>
         <input type="checkbox" class="form-check-label" id="customers" v-model="user.customers" required>

         <div class="form-group">
            <label for="email">Email:</label>
            <input type="text" class="form-control" id="email" v-model="user.email" required>

            <label for="password">Contraseña:</label>
            <input type="text" class="form-control" id="password" v-model="user.password" required>

            <ul>
               <li>Tu contraseña debe de contener por lo menos 8 caracteres.</li>
            </ul>

            <label for="confirm">Confirmar contraseña:</label>
            <input type="text" class="form-control" id="confirm" v-model="user.confirm" required>
         </div>

         <div class="text-center">
            <button type="submit" class="btn btn-success my-2">Guardar</button>
         </div>
      </form>
   </div>
</template>

<script setup>
   import { useAuthStore } from '@/stores/auth';
   const loginStore = useAuthStore()
   let user = {
      email: "",
      customers: false,
      username: "",
      password: "",
      confirm: ""
   }

   function handleSubmit(event){
      event.preventDefault()
      if(user.password.length < 8){
         alert("La contraseña debe de tener por lo menos 8 caracteres")
         return 0
      }
      else if(user.password !== user.confirm){
         alert("Las contraseñas no conciden")
         return 0
      }
      loginStore.signUp(user)
   }

</script>
