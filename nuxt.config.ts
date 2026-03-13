export default defineNuxtConfig({
  modules: ["@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },

  i18n: {
    strategy: "prefix",
    defaultLocale: "en",
    lazy: true,
    langDir: "locales",
    locales: [
      { code: "en", file: "en.json", name: "English" },
      { code: "et", file: "et.json", name: "Eesti" },
    ],

    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },

    vueI18n: "./i18n/i18n.config.ts",
  },
});
