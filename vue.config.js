const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/inpicklist/',
  outputDir: './docs',
  devServer: {
    proxy: 'https://api.instagram.com'
  }
})
