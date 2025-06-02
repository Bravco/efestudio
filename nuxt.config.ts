export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image"
  ],
  css: [ "~/assets/css/main.css" ],
  router: {
    options: {
      scrollBehaviorType: "smooth"
    }
  }
})