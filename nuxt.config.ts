// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/i18n',
    'nuxt-studio',
    '@nuxt/eslint'
  ],
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/components',
      global: true,
    }
  ],
  i18n: {
    locales: [
      { code: 'en', name: 'English', language: 'en-US', dir: 'ltr' },
      { code: 'fr', name: 'French', language: 'fr-FR' },
      { code: 'fa', name: 'Farsi', language: 'fa-IR', dir: 'rtl' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})