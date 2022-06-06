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
      <span class="text-black text-4xl dark:text-white">Benjamín Gautier</span>
      <span class="text-gray-800 text-md dark:text-white">@begandroide</span>
      <!-- <button type="button" @click="count++">count is: {{ count }}</button> -->
    </div>

    <div class="
      dark:bg-gray-800
      dark:text-white
      bg-gray-300
      flex-col
      items-stretch
      flex-grow
      m-12 xl:mx-80
      p-4
      rounded-xl
      text-gray-800
      min-h-30
      overflow-scroll">
      <!-- <span class="opacity-toggle dark:text-white text-gray-800">|</span> -->
      <!-- <p>
        {{ t('AboutMeText') }}
      </p> -->
      <div class="flex w-full flex-row items-start">
        <div class=" border-dark-700 dark:border-white  typewriter line-1 text-left">
          <h1>> cd /opt/begandroide</h1>
        </div>
      </div>
      <div class="flex w-full flex-row items-start">
        <div class="border-dark-700 dark:border-white typewriter line-2 text-left">
          <h1>> echo .hello</h1>
        </div>
      </div>
      <div class="flex w-full flex-row items-start">
        <div class="border-dark-700 dark:border-white typewriter line-3 text-left">
          <h1>Chilean Software Engineer 🇨🇱</h1>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

.line-1 h1 {
  height: 0;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  margin-right: .25em;
  letter-spacing: .135em;
  animation:
    typing 2.5s 1s steps(70, end),
    height-max .75s 1s step-end infinite,
    show-caret .75s 1s step-end infinite,
    blink-caret .75s 1s step-end infinite,
    pause-caret .75s 5s step-end infinite;
}

.line-2 h1 {
  height: 0;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  margin-right: .25em;
  letter-spacing: .135em;
  animation:
    typing 2s 6s steps(50, end),
    height-max .75s 6s step-end infinite,
    show-caret .75s 6s step-end infinite,
    blink-caret .75s 6s step-end infinite,
    pause-caret .75s 9s step-end infinite;
}
.line-3 h1 {
  height: 0;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  margin-right: .25em;
  letter-spacing: .135em;
  animation:
    typing 2.5s 9s steps(90, end),
    height-max .75s 9s step-end infinite,
    show-caret .75s 9s step-end infinite,
    blink-caret .75s 9s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent}
  50% { border-color: inherit }
}

@keyframes pause-caret {
  from, to { border-color: transparent}
}

@keyframes show-caret {
  from, to {  border-right: .15em solid;}
}
@keyframes height-max {
  from, to { height: 100%; }
}

a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

#bg-logo {
  width: 16em;
  height: 16em;
}

</style>
