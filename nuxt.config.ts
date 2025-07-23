export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/content", "lenis/nuxt", "v-gsap-nuxt", "@nuxtjs/robots", "@zadigetvoltaire/nuxt-gtm"],
  css: [ "~/assets/main.css", "~/assets/text.css" ],
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" }
      ],
      title: "efestudio",
      htmlAttrs: {
        lang: "sk"
      },
      meta: [
        {
          name: "apple-mobile-web-app-title",
          content: "efestudio"
        },
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
  },
  gtm: {
    id: "GTM-TFZZK63H"
  }
})
