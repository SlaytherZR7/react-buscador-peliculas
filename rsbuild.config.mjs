import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
  html: {
    template: 'public/index.html'
  },
  source: {
    define: {
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
    }
  },
  plugins: [pluginReact()]
})
