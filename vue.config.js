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
  //       target: "xxx",
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
