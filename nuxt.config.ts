// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    secretKey: 11111111,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  // css: ["assets/css/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/css/global.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      title: 'My Nuxt Application',
      meta: [
        {
          charset: 'utf-8',
        },
      ],
    },
  },



  //自定义自动导入模块
  // imports: {
  //   dirs: [
  //     // 扫描顶层目录中模块
  //     'composables',
  //     // 扫描内嵌一层深度的模块，指定特定文件名和后缀名
  //     'composables/*/index.{ts,js,mjs,mts}',
  //     // 扫描给定目录中所有模块
  //     'composables/**'
  //   ]
  // },
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    'pinia-plugin-persistedstate',
    "@nuxt/image"
  ],
  build: {
    transpile: ['pinia-plugin-persistedstate']
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },
  imports: {
    dirs: ['constent']
  },
})