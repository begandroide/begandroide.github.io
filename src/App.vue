<script setup lang="ts">

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'

</script>

<template>
  <div id="sup" class="h-full flex flex-col place-items-stretch relative">
    <Header />
    <!-- <Home msg="Hello Vue 3 + TypeScript + Vite" /> -->
    <div class="m-24">
      <router-view />
    </div>
    <!-- <Home2></Home2> -->
  </div>
</template>

<style scoped>

</style>
