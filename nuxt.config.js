export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Message In A Bottle",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "A crowdsourced interactive film showing the many different lives a plastic water bottle will lead during its 450 year journey towards disintegration.",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/img/icons/favicon.ico" },
      {
        rel: "icon",
        sizes: "180x180",
        href: "/img/icons/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/img/icons/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/img/icons/favicon-16x16.png",
      },
      { rel: "manifest", href: "/img/icons/site.webmanifest" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/styles/v1/fonts-and-colors.sass",
    "~/assets/styles/v1/bootstrap/overrides.sass",
    "~/assets/styles/v1/base.sass",
    "~/assets/styles/v1/app.sass",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "plugins/bootstrap.js", mode: "client" },
    { src: "plugins/fontawesome.js" },
    { src: `~plugins/vimeo-player` },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/composition-api/module",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    /* module options */
    families: {
      Oswald: { wght: [300, 500] },
      "Azeret+Mono": { wght: [600] },
    },
    useStylesheet: true,
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true,
  },

  proxy: {
    "/v1": {
      target: "http://localhost:3000",
      pathRewrite: { "^/v1": "" },
      changeOrigin: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["vue-vimeo-player"],
    cssSourceMap: false,
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.(obj|mtl|blend1)?$/,
        loader: "file-loader",
      });
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = "development";
      }
    },
    filenames: {
      app: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? ".modern" : ""}.js`
          : `[contenthash:7]${isModern ? ".modern" : ""}.js`,
      chunk: ({ isDev, isModern }) =>
        isDev
          ? `[name]${isModern ? ".modern" : ""}.js`
          : `[contenthash:7]${isModern ? ".modern" : ""}.js`,
      css: ({ isDev }) => (isDev ? "[name].css" : "css/[contenthash:7].css"),
      img: ({ isDev }) =>
        isDev
          ? "[path][name].(png|svg|jpg|jpeg|gif)"
          : "img/[name].[contenthash:7].[ext]",
      font: ({ isDev }) =>
        isDev
          ? "[path][name].(woff|woff2|otf|ttf)"
          : "fonts/[name].[contenthash:7].[ext]",
      video: ({ isDev }) =>
        isDev
          ? "[path][name].(mp4|mp3|mov)"
          : "videos/[name].[contenthash:7].[ext]",
      json: ({ isDev }) =>
        isDev ? "[path][name].json" : "content/[name].[contenthash:7].[ext]",
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        automaticNameDelimiter: ".",
        name: undefined,
        cacheGroups: {},
      },
    },
    splitChunks: {
      layouts: false,
      pages: true,
      commons: true,
    },
  },
  generate: {
    interval: 2000,
  },
};
