// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

const path = require('path')

export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    'nuxt-snackbar',
    "nuxt-vuefire",
    "nuxt-vuefire"
  ],
  nitro: {
    output: {
      publicDir: path.join(__dirname, '/dist')
    }
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
  },
  vuefire: {
    auth: {
      enabled: false
    },
    config: {
      databaseURL: '/',
      apiKey: "AIzaSyAapmjw2ak4GCZL1GUrHNZR3AFgrPgejXM",
      authDomain: "liftdom-service.firebaseapp.com",
      projectId: "liftdom-service",
      storageBucket: "liftdom-service.appspot.com",
      messagingSenderId: "327847538611",
      appId: "1:327847538611:web:6364eb07fd0a42c934e5c6",
      measurementId: "G-D6S1468MEH",
    }
  }
})
