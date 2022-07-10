import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import path, { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import Markdown, { code, link, meta } from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
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
    Markdown({
      // headEnabled: true,
      builders: [
        meta({
          routeProps: ['layout', 'requireAuth'],
          defaults: {
            requireAuth: () => false,
          },
        }),
        link(),
        code({
          theme: 'base',
          layoutStructure: 'tabular',
        }),
      ],
    }),
    Pages({
      dirs: [
        // issue #68
        { dir: resolve(__dirname, './src/pages'), baseRoute: '' },
      ],
      extensions: ['vue', 'md'],
      extendRoute(route: any) {
        if (route.name === 'about')
          route.props = (route: any) => ({ query: route.query.q })

        if (route.name === 'components') {
          return {
            ...route,
            beforeEnter: (route: any) => {
              // eslint-disable-next-line no-console
              console.log(route)
            },
          }
        }
      },
    }),
  ]
})
