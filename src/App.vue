<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'

import { isDark } from './logic/dark'
import darkLogo from './assets/bg_dark.svg'
import lightLogo from './assets/bg_light.svg'
</script>

<template>
  <div id="sup" class="h-full flex flex-col place-items-stretch">
    <Header />
    <div class="flex-auto dark:bg-gray-900 flex flex-col items-center">
      <img id="bg-logo" alt="bg logo" v-bind:src="isDark ? darkLogo : lightLogo">
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </div>
  </div>
</template>

<style scoped>
#bg-mini-logo {
  width: 4em;
  height: 4em;
}
#bg-logo {
  width: 16em;
  height: 16em;
}

</style>
