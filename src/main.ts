import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from '~pages'
import './styles/main.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'
import Particles from 'particles.vue3'

console.log('vue:', routes)

import { createI18n } from 'vue-i18n'

import en from '../locales/en.yaml'
import es from '../locales/es.yaml'
import { createHead } from '@vueuse/head'

const i18n = createI18n({
    locale: 'es',
    messages: {
        en,
        es
    }
})

const head = createHead()

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(Particles)
app.use(head)
app.use(i18n).mount('#app')
