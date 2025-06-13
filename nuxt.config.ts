export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "lenis/nuxt",
    "v-gsap-nuxt"
  ],
  css: [ "~/assets/main.css" ]
})