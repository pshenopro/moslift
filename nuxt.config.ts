// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, "/")
  },
  css: [
    '~/assets/style/index.scss'
  ],
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    '@nuxt/image'
  ],
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
  image: {
    dir: 'assets/img',
  }
})
