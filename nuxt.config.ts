// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import { resolve } from 'path'

const path = require('path')

export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    'nuxt-mail'
  ],
  mail: {
    message: {
      to: 'n.psheno@gmail.com',
    },
    smtp: {
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: 'OAuth2',
        user: 'liftdomservice@gmail.com',
        pass: 'Spring305305',
        clientId: '910529604365-s4s4frd4amvc53q3kqrfisphnq9o3s1m.apps.googleusercontent.com',
        clientSecret: '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'
      },
    },
  },
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
  }
})
