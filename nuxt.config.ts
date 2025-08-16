// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

const path = require('path')

export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    'nuxt-snackbar'
  ],
  site: {
    url: 'https://modtfilservice-liftdom.ru',
  },
 nitro: {
    publicAssets: [
      { dir: 'assets', baseURL: '/assets' },
      { dir: 'assets/img', baseURL: '/dist/img' }
    ]
  },
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: [
    '~/assets/style/index.scss'
  ],
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  },
  googleFonts: {
    families: {
      Inter: [200, 400, 500, 600, 700]
    }
  },
  snackbar: {
    top: true,
    right: true,
    duration: 3000,
    backgroundColor: '#fff'
  }
})
