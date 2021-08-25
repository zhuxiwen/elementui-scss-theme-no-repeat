const port = 9545;

module.exports = {
  publicPath: "./",
  // outputDir: "dist",
  // assetsDir: "static",
  // lintOnSave: false,
  // productionSourceMap: false,
  // devServer: {
  //   port: port,
  //   https: true,
  //   proxy: {
  //     "/test": {
  //       target: "http://10.200.201.32:9030", // IT服务平台测试服
  //       changeOrigin: true,
  //       pathRewrite: {
  //         "^/test": "/"
  //       }
  //     },
  //   }
  // },
  // chainWebpack: (config) => {
  // },
  css: {
    loaderOptions: {
      // 全局scss
      sass: {
        prependData: `
          @import "~@/styles/element-variables.scss";`,
        // @import "~@/styles/variables.scss";
        // @import "~@/styles/mixin.scss";`
      },
    },
  },
};
