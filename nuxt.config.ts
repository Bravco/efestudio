export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "lenis/nuxt",
    "v-gsap-nuxt"
  ],
  css: [ "~/assets/main.css" ],
  app: {
    head: {
      title: "efestudio",
      htmlAttrs: {
        lang: "sk"
      },
      meta: [
        {
          name: "title",
          content: "efestudio",
        },
        {
          name: "description",
          content: "Sme digitálne marketingové štúdio. Klientom prinášame komplexné riešenia v oblasti značky obsahu a webov. Každý projekt staviame na jasnej stratégii a cieľoch.",
        },
        {
          name: "robots",
          content: "index, follow",
        }
      ]
    }
  }
})