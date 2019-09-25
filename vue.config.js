module.exports = {
  outputDir: 'dist', // 打包文件名
  assetsDir: 'static', // 静态文件夹
  publicPath: '/', // 公共路径
  devServer: {
    open: true, // 自动打开浏览器
    port: 8087, // 指定端口
    // 代理配置
    proxy: {
      '^/api': {
        target: 'https://suggest.taobao.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  //
  },
  configureWebpack: {
    externals: {
      // 高德地图配置
      'AMap': 'AMap',
      AMapUI: 'AMapUI',
      'Loca': 'Loca'
    }
  }
}
