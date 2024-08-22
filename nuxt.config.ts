// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
  modules: ['@pinia/nuxt', '@unocss/nuxt']
})
