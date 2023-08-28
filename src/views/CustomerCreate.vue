<template>
   <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4 my-5">
         <h1>Registrar nuevo cliente</h1>
         <form @submit="handleSubmit">
            <div v-for="(value, key) in customer" :key="key" class="form-group">
               <template v-if="key!=='estado'">
                  <label :for="key">{{ formatLabel(key) }}</label>
                  <input
                  v-if="typeof value === 'string' || typeof value === 'number'"
                  :type="inputType(value)"
                  :id="key"
                  v-model="customer[key]"
                  class="form-control"
                  required
                  />
               </template>
            </div>
            <label for="estado">ESTADO</label>
            <select name="estado" class="form-control" required="" id="estado" v-model="customer.estado">
               <option value="" selected="">---------</option>
               <option value="INACTIVO">Inactivo</option>
               <option value="POTENCIAL">Potencial</option>
            </select>
            <div class="text-center">
               <button type="submit" class="btn btn-success my-2">Guardar</button>
            </div>
         </form>
      </div>
   </div>
</template>

<script setup>
   import {useAuthStore} from '../stores/auth'
   import router from '@/router'

   const loginStore = useAuthStore()
   let customer = {
      nombre_organizacion: "",
      direccion: "",
      nit: "",
      administrador: "",
      telefono: 0,
      correo: "",
      supervisor: "",
      telefono_supervisor: 0,
      correo_supervisor: "",
      frecuencia_meses: 0,
      apartamentos: 0,
      estado: "",
   }
   function formatLabel(key) {
      return key.replace(/_/g, " ").toUpperCase();
    }
    function inputType(value) {
      return typeof value === "number" ? "number" : "text";
    }
   function handleSubmit(event){
      event.preventDefault();

      fetch('http://localhost:8000/clientes-api/',{
         method:'POST',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${loginStore.token}`,
         },
         body: JSON.stringify(customer)
      }).then(response => {
         return response.json()
      }).catch(error =>{
         console.error(error)
      })

      router.push({name: "customerList"})
   }
</script>
