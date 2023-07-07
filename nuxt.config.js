import getRoutes from './utils/getRoutes'

const routerBase = '/blog/'
const googleFontUrl =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap'

export default {
  publicRuntimeConfig: {
    imageServer: 'https://imagizer.imageshack.com/v2/',
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: routerBase,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '藍帽手札',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '前端程式 + Linux的心得筆記',
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss',
  ],
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
    componentPlugins: [
      'LayoutPlugin',
      'CardPlugin',
      'ModalPlugin',
      'BadgePlugin',
      'ImagePlugin',
    ],
    directivePlugins: [],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    // your settings here
    scss: ['~/assets/css/custom.scss'],
    // hoistUseStatements: true  // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-content-git',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
    icon: {
      source: 'static/icon.png',
      fileName: 'icon.png',
      sizes: [64, 120, 144, 152, 192, 384, 512],
      targetDir: 'icons',
      plugin: true,
      purpose: ['any', 'maskable'],
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-dark.css',
      },
    },
    ignores: ['draft'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    babel: {
      // See: https://github.com/bootstrap-vue/bootstrap-vue/issues/5627
      compact: true,
    },
  },

  // Sitemap Module: https://sitemap.nuxtjs.org/usage/sitemap/
  sitemap: {
    hostname: 'https://huangchingchieh.github.io/',
    gzip: true,
    routes: () => getRoutes(routerBase),
    // exclude: ['/secret', '/admin/**'],
    // routes: [
    //   '/page/1',
    //   '/page/2',
    //   {
    //     url: '/page/3',
    //     changefreq: 'daily',
    //     priority: 1,
    //     lastmod: '2017-06-30T13:30:00.000Z',
    //   },
    // ],
  },
}
