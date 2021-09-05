<script setup lang="ts">
import IconAsleep from '~icons/carbon/asleep'
import IconLight from '~icons/carbon/light'
import IconLogoGithub from '~icons/carbon/logoGithub'
import IconLogoTwitter from '~icons/carbon/logoTwitter'
import IconLogoLinkedIn from '~icons/carbon/logoLinkedin'
import { toggleDark, isDark } from '../logic/dark'
import darkLogo from '../assets/bg_dark.svg'
import lightLogo from '../assets/bg_light.svg'
</script>

<template>
<div class="flex-none min-h-10 border-b-1 border-b-gray-300 flex flex-row justify-between items-center dark:bg-gray-900" >
    <img id="bg-mini-logo" alt="bg mini logo" v-bind:src="isDark ? darkLogo : lightLogo">
  
    <div class="flex flex-row justify-center items-center gap-2 p-1 pr-4">
    <a href="https://www.linkedin.com/in/benjamingautierortiz">
        <icon-logo-linked-in style="height: 1.2em; width: 1.2em;" class="cursor-pointer text-black dark:text-white "/>
    </a>

    <a href="https://twitter.com/begandroide">
        <icon-logo-twitter style="height: 1.2em; width: 1.2em;" class="cursor-pointer text-black dark:text-white "/>
    </a>

    <a href="https://github.com/begandroide">
        <icon-logo-github style="height: 1.2em; width: 1.2em;" class="cursor-pointer text-black dark:text-white "/>
    </a>
    <a @click="toggleDark()">
        <icon-asleep v-if="isDark" style="height: 1.2em; width: 1.2em;" class="cursor-pointer text-black dark:text-white "/>
        <icon-light v-if="!isDark" style="height: 1.2em; width: 1.2em;" class="cursor-pointer text-black dark:text-white "/>
    </a>
    </div>

</div>

</template>

<style scoped>
#bg-mini-logo {
  width: 4em;
  height: 4em;
}
</style>