export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/content", "lenis/nuxt", "v-gsap-nuxt", "@nuxtjs/robots"],
  css: [ "~/assets/main.css", "~/assets/text.css" ],
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
        }
      ]
    }
  }
})