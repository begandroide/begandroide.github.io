<script setup lang="ts">
import { ref } from 'vue'
// import { useI18n } from 'vue-i18n'

// const { t } = useI18n()

defineProps<{ msg: string }>()

const count = ref(0)

</script>

<template>
  <!-- <h1 class="mt-4">{{ msg }}</h1> -->


  <span class="border-l-amber-800 text-4xl font-mono">¡Bienvenido!</span>

  <p>See <code>README.md</code> for more information.</p>

  
  <button type="button" @click="count++">count is: {{ count }}</button>
</template>

<style scoped>
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
</style>
