<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import IconThemeLightDark from '~icons/mdi/theme-light-dark'
import { toggleDark, isDark } from './logic/dark'
import darkLogo from './assets/bg_dark.svg'
import lightLogo from './assets/bg_light.svg'
</script>

<template>
  <div class="h-full flex flex-col place-items-stretch">
    <div class="flex-none min-h-10 border-b-1 pb-2 border-b-gray-300 flex flex-row justify-between items-center dark:bg-gray-900">
      <img id="bg-mini-logo" alt="bg mini logo" v-bind:src="isDark ? darkLogo : lightLogo">
      <button class="inline-flex p-2 text-xl" @click="toggleDark()">
        <icon-theme-light-dark style="font-size: 2em;" class="cursor-pointer p-1 btn-ld text-black dark:text-white "/>
      </button>

    </div>
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

.btn-ld:hover {
  cursor: pointer;
}
</style>
