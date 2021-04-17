/* eslint-disable */
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
  productionSourceMap: false,
  baseUrl: '/',
  outputDir: 'dist',
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8888,
    proxy: {
      'operation': {
        target: 'http://localhost:8888/',
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: config => {
    config.externals = {
    }
    config.resolve = {
      extensions:['.js', '.vue', '.json'],
      alias: {
        'vue':'vue/dist/vue.common.js',
        '@': path.resolve(__dirname,'src')
      }
    }
    if (process.env.NODE_ENV === 'production') {
      // mutate config for production...
    } else {
      // mutate config for development...
    }
    if (process.argv[3] === 'analyse') {
      // mutate for test...
      config.plugins.push(new BundleAnalyzerPlugin());
    } 
  }
}
