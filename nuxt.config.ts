import { defineNuxtConfig } from 'nuxt/config'

const perPage = 10
const base = '/blog/'
const imageServer = 'https://imagizer.imageshack.com/v2/'
const appHost = 'https://huangchingchieh.github.io' + base
const description =
  '一個非本科系的前端小碼農，紀錄一些身為前端小碼農的技術筆記、使用Linux（主要是Fedora）的心得，以及生活上雜七雜八的事情。'
const categoriesMap = {
  all: '最新文章',
  linux: 'Linux心得',
  frontend: '前端筆記',
  life: '生活雜記',
}

// 從generate hooks偷routes出來給sitemap使用
// const routes = []

export default defineNuxtConfig({
  experimental: {
    appManifest: false,
    sharedPrerenderData: true,
  },
  /* 不確定對應到哪邊的設定值 START */
  // loading: "~/components/common-loading.vue",
  /* 不確定對應到哪邊的設定值 END */
  site: {
    url: 'https://huangchingchieh.github.io',
  },

  sitemap: {
    sources: ['/api/sitemap'],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: [
            'legacy-js-api',
            'import',
            'global-builtin',
            'color-functions',
            'mixed-decls',
          ],
        },
      },
    },
  },

  features: {
    inlineStyles: false,
  },

  modules: [
    'nuxt-content-git',
    '@vite-pwa/nuxt',
    '@nuxt/content',
    '@nuxtjs/sitemap',
    // // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@primevue/nuxt-module',
    '@nuxtjs/tailwindcss',
  ],

  runtimeConfig: {
    public: {
      base,
      imageServer,
      appHost,
      perPage,
      categoriesMap,
      description,
      isDev: process.env.NODE_ENV !== 'production',
    },
  },

  dir: {
    public: 'static',
  },

  app: {
    baseURL: base,
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW',
      },
      title: '隨機手札',
      titleTemplate: '%s｜隨機手札',
      meta: [
        { key: 'charset', charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          key: 'description',
          name: 'description',
          content: description,
        },
        {
          'http-equiv': 'X-UA-Compatible',
          content: 'ie=edge',
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'website',
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: '隨機手札',
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: `${appHost}images/default-og.png`,
        },
        {
          key: 'og:site_name',
          property: 'og:site_name',
          content: '隨機手札',
        },
        {
          key: 'og:locale',
          property: 'og:locale',
          content: 'zh_TW',
        },
        {
          key: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: '隨機手札',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: `${appHost}favicon.ico`,
        },
        {
          rel: 'apple-touch-icon',
          href: `${appHost}/pwa-192x192.png`,
        },
        {
          rel: 'mask-icon',
          href: `${appHost}/maskable-icon-512x512.png`,
        },
        // Google Font
        // {
        //   rel: 'preconnect',
        //   href: 'https://fonts.googleapis.com',
        // },
        // {
        //   rel: 'preconnect',
        //   href: 'https://fonts.gstatic.com',
        //   crossorigin: '',
        // },
        // {
        //   rel: 'stylesheet',
        //   href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100..900&display=swap',
        // },
      ],
      script: [
        {
          async: true,
          defer: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-KHMFPTGCC2',
          tagPriority: 'critical',
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
    
          gtag('config', 'G-KHMFPTGCC2')`,
          tagPriority: 'critical',
        },
      ],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss',
    '~/assets/css/tailwind.css',
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      langs: [
        'bash',
        'ini',
        'html',
        'vue',
        'scss',
        'javascript',
        'xml',
        'console',
        'json',
        'ts',
        'markdown',
      ],
    },
    markdown: {
      anchorLinks: false,
      tags: {
        code: 'ArticleCode',
        pre: 'ArticlePre',
        a: 'ArticleOuterLink',
        hr: 'ArticleHr',
        p: 'ArticleP',
        h2: 'ArticleH2',
        h3: 'ArticleH3',
        blockquote: 'ArticleBlockquote',
        em: 'ArticleEm',
        ul: 'ArticleUl',
        ol: 'ArticleOl',
      },
      remarkPlugins: ['remark-reading-time'],
    },
    experimental: {
      search: {
        indexed: true,
        options: {
          fields: ['title', 'content', 'titles'],
          storeFields: [],
          searchOptions: {
            prefix: true,
            fuzzy: 0.2,
            boost: {
              title: 4,
              content: 2,
              titles: 1,
            },
          },
        },
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    registerType: 'autoUpdate',
    devOptions: {
      enabled: true,
    },
    manifest: {
      name: '隨機手札',
      short_name: '隨機手札',
      description,
      lang: 'zh-Hant-TW',
      icons: [
        {
          src: `wa-64x64.png`,
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: `pwa-192x192.png`,
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: `pwa-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: `maskable-icon-512x512.png`,
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
  },

  primevue: {
    options: {
      theme: 'none',
    },
    components: {
      prefix: 'P',
    },
  },

  compatibilityDate: '2024-12-09',
})
