const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 3030,
  },
  configureWebpack: {
    resolve: {
      fallback: {
        path: false,
        stream: false,
        zlib: false,
        fs: false
      }
    }
  }
})
