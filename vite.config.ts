import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path from 'path'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/antfu/unplugin-icons
    Icons({compiler: 'vue3'}),
    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS(),

    // https://github.com/intlify/vite-plugin-vue-i18n
    vueI18n({
      runtimeOnly: true,
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,
  
      // you need to set i18n resource including paths !
      compositionOnly: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ]
})
