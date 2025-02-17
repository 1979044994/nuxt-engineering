import { createConfigForNuxt } from '@nuxt/eslint-config'

export default createConfigForNuxt({
    features: {
    // Rules for module authors
    tooling: true,
    // Rules for formatting
    stylistic: false,
  },
  // options here
})
