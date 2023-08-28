<template>
   <div id="app">
      <NavBar/>
      <div class="main">
         <router-view></router-view>

      </div>
   </div>
</template>

<script setup>
   import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

</script>

<style>

*, *before, *after{
   box-sizing: border-box;
}

.main{
   padding: 30px;
}

</style>
