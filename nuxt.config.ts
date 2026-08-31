// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Cartersville Tours",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Cartersville Tours offers guided tours and experiences in Cartersville, helping visitors explore the local attractions and culture.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  nitro: {
    preset: "azure",
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});
