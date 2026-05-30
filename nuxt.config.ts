// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/content', 'nuxt-studio'],
  css: ['~/assets/css/main.css'],
  components: [
    {
      path: '~/app/components',
      global: true,
    }
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})