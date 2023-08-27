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

</script>

<style>

*, *before, *after{
   box-sizing: border-box;
}

.main{
   padding: 30px;
}

</style>
