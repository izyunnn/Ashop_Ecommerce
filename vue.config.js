const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
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
