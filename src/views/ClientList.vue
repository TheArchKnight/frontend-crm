<template>
   <div class="row">
      <div class="col-md-12">

         <div class="table-responsive">
            <table class="table table-hover sticky table-striped align-middle" id="clientes-table">
               <thead>               
                  <th class="text-center" col-index=1>Nombre</th>
                  <th class="text-center" col-index=2>Direccion</th>
                  <th class="text-center" col-index=3>Administrador</th>
                  <th class="text-center" col-index=4>Telefono administrador</th>

                  <th class="text-center" col-index=5>Correo administrador</th>
                  <th class="text-center" col-index=6>Frecuencia
                     <select  class="table-filter form-select text-center"   onchange="filter_rows()">
                        <option value="all">Todos</option>
                     </select>
                  </th>
                  <th class="text-center" col-index=7>Fecha de vencimiento
                     <select class="table-filter form-select text-center" onchange="filter_rows()">
                        <option value="all">Todos</option>
                     </select>
                  </th>
                  <th class="text-center" col-index=8>Estado
                     <select class="table-filter form-select text-center" onchange="filter_rows()">
                        <option value="all">Todos</option>
                     </select>
                  </th>
                  <th class="text-center">NIT</th>
               </thead>
               <tbody>             
                  <tr v-for="customer in customers" :key="customer.id" class="text-center">
                     <td><a href="">{{customer.nombre_organizacion}}</a></td>
                     <td>{{customer.direccion}}</td>
                     <td>{{customer.administrador}}</td>
                     <td>{{customer.telefono}}</td>
                     <td>{{customer.correo}}</td>
                     <td>{{customer.frecuencia_meses}}</td>
                     <td>{{customer.fecha_vencimiento}}</td>

                     <!--
                        {% if customer.fecha_vencimiento == None %}
                        {% else %}
                        <td>{{customer.fecha_vencimiento}}</td>
                        {% endif %}
                     -->
                     <td>{{customer.estado}}</td>
                     <td>{{customer.nit}} </td>
                  </tr>

               </tbody>

            </table>
            <hr/>
            <div class="text-center" >               
               <router-link  class="btn btn-success" :to="{name: 'customerCreate'}">Crear nuevo cliente</router-link> 
            </div>
         </div>
      </div>
   </div>



</template>
<script setup>
   import { useAuthStore } from '@/stores/auth';
   import { ref } from 'vue';
   const loginStore = useAuthStore()
   let customers = ref([]);
   fetch('http://localhost:8000/clientes-api/', {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': `Token ${loginStore.token}`,
     },
   }).then(response => {
     return response.json(); // This returns a Promise
   }).then(data => {
     customers.value = data; // Assign the fetched data to the customers array
   }).catch(error => {
     console.error('Fetch error:', error);
   });
</script>


<style scoped>
.table.sticky{
   border-collapse: collapse;
   text-align: center;
   height: 650px;
   display: block;
   overflow-y: auto;
}

.table.sticky thead{
   position: sticky;
   z-index: 1;
   top: 0;
   background-color: gray;
}

.table.sticky td{
   width: 450px;
   border-bottom: 1px solid #000;
}

.table.sticky th{
   width: 450px;
   border-left: 1px solid #000;

}
 .table.sticky th:first-child{
    border-left: none;

 }


 table.form{
    text-align: center;
    border-collapse: collapse;
 }

 table.form th{
    width: 250px;
 }

 table.form input{
    margin: 0 auto;
    width: 80px;

 }

 table.form select{
    width: 200px;
 }



</style>
