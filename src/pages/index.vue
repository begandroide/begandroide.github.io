<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from '../components/Home.vue'
// import Home2  from './pages/home.md'
</script>

<template>
  <div>
    <Home msg="Hello Vue 3 + TypeScript + Vite" />

    <p>index.vue</p>
    <router-link to="/blog">
      blog
    </router-link> |
    <router-link to="/about">
      about
    </router-link> |
    <router-link to="/markdown">
      markdown
    </router-link> |
  </div>
</template>

<route lang="json">
{
  "name": "home",
  "meta": {
    "requiresAuth": false
  }
}
</route>
