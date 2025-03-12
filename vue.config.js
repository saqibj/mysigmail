import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  publicPath: isProd ? '/create/' : '/',
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule.use('vue-svg-loader').loader('vue-svg-loader')
  }
})
