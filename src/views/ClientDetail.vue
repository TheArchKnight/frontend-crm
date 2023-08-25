<template>

   <div class="row">
      <div class="col-md-3 info-parent"> 
         <div class="row text-center info-cliente" >
            <h1>
               cliente
            </h1>
            <h3>cliente.direccion</h3>
            <h5>Estado del cliente: cliente.estado</h5>

            <h5>Estado de la ultima visita: </h5>
            <h5>Vencimiento: </h5>
            <div class="text-center">

               <a href="" class="btn btn-warning" title="Editar">
                  <i class="bi bi-clipboard2-plus"></i>
               </a>                                                
               <!-- Button trigger modal -->
               <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalEliminar" title="Eliminar">
                  <i class="bi bi-trash"></i>
               </button>
            </div>
         </div>

         <div class="row my-3">
            <h2 class="text-center">Programar visita/llamada</h2>
            <div class="text-center">
               Cantidad de rechazos por parte del cliente: cliente.rechazos 
            </div>

            <form method="post">
               <div id="fecha_repetida_form" class="text-center"></div>
               <div class="text-center">
                  <button type="submit" class="btn btn-success"> Guardar</button>
               </div>
            </form>
         </div>

      </div>
      <div class="col-md-9">
         <div class="row">
            <table class="table sticky">
               <thead>
                  <th class="text-center">Fecha</th>
                  <th class="text-center">Obersvaciones</th>
                  <th class="text-center">Tipo</th>
                  <th class="text-center">Acciones</th>

               </thead>
            </table>


         </div>
      </div>
   </div>





</template>

<script setup>

</script>

<style>
.info-parent{
   border: 3px solid grey;
   height: 100%;
}

.info-cliente{
   background-color: grey;
   padding: 10px;
}


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
