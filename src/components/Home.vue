<script setup lang="ts">

import { isDark } from '../logic/dark'
import darkLogo from '../assets/bg_dark.svg'
import lightLogo from '../assets/bg_light.svg'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()

defineProps<{ msg: string }>()

// import { ref } from 'vue'
// const count = ref(0)

</script>

<!-- <h1 class="mt-4">{{ msg }}</h1> -->
<!-- <p>See <code>README.md</code> for more information.</p> -->
<template>
<div class="flex-auto dark:bg-gray-900">
  <div class="flex flex-col items-center gap-2">
    <img id="bg-logo" alt="bg logo" v-bind:src="isDark ? darkLogo : lightLogo">
    <span class="text-black text-4xl" dark="text-white">Benjamín Gautier</span>
    <span class="text-gray-800 text-md" dark="text-white">@begandroide</span>
    <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->
  </div>

  <div class="bg-gray-800 flex-grow m-12 rounded-xl p-4 dark:bg-gray-800">
    <transition name="bounce">|</transition>
    <p>
      {{ t('AboutMeText') }}
    </p>
  </div>

  <!-- <div class="bg-gray-200 flex-grow m-12 rounded-32px p-4 min-h-md dark:bg-gray-200">
    <span class="text-sm text-gray-800">{{ t('AboutMe') }}</span>
    <p>
      {{ t('AboutMeText') }}
    </p>
  </div> -->
</div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}

#bg-logo {
  width: 16em;
  height: 16em;
}

</style>
