import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import 'virtual:windi.css'
import 'virtual:windi-devtools'

import { createI18n } from 'vue-i18n'

import en from '../locales/en.yaml'
import es from '../locales/es.yaml'

const i18n = createI18n({
    locale: 'es',
    messages: {
        en,
        es
    }
})

const app = createApp(App)
app.use(i18n).mount('#app')
