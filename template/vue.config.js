const path = require("path");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const { defineConfig } = require("@vue/cli-service");
// const webpack = require("webpack");
var ProgressBarPlugin = require("progress-bar-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  parallel: false,
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: process.env.NODE_ENV !== "production",
  productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    port: 8082,
    hot: true,
    open: true,
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "${resolve("./src/styles/variables.less")}";`,
        },
      },
    },
  },
  configureWebpack: () => {
    const options = {
      // provide the app's title in webpack's name field, so that
      // it can be accessed in index.html to inject the correct title.
      resolve: {
        alias: {
          "@": resolve("src"),
          "@components": resolve("src/components"),
          "@utils": resolve("src/utils"),
          "@views": resolve("src/views"),
          "@api": resolve("src/api"),
          "@assets": resolve("src/assets"),
        },
      },
    };
    let plugins = [
      new ProgressBarPlugin(),
      // new webpack.DefinePlugin({
      //   "process.argv": JSON.stringify(process.argv),
      // }),
    ];
    if (process.env.NODE_ENV !== "development") {
      plugins = [
        ...plugins,
        new FileManagerPlugin({
          events: {
            onEnd: {
              delete: ["./dist.zip"],
              archive: [
                {
                  source: "./dist",
                  destination: "./dist.zip",
                },
              ],
            },
          },
        }),
      ];
    }
    return {
      ...options,
      plugins,
    };
  },
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end();

    // set preserveWhitespace
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.compilerOptions = {
          preserveWhitespace: true,
        };
        return options;
      })
      .end();

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(
        process.env.NODE_ENV === "development",
        (config) => config.devtool("source-map")
        // config => config.devtool('cheap-source-map')
      );

    config.when(process.env.NODE_ENV !== "development", (config) => {
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          libs: {
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // only package third parties that are initially dependent
          },
          elementUI: {
            name: "chunk-vantUI", // split elementUI into a single package
            priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
            test: /[\\/]node_modules[\\/]_?vant(.*)/, // in order to adapt to cnpm
          },
          commons: {
            name: "chunk-commons",
            test: resolve("src/components"), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true,
          },
        },
      });
      config.optimization.runtimeChunk("single");
    });
  },
});
