/**
 * vue-cli3配置文件
 */
// 获取环境变量
const env = process.env.Node_ENV;
const path = require("path");
// 引入Gzip插件
const compressionWebpackPlugin = require("compression-webpack-plugin");
// 压缩优化js插件
const uglifyJsPlugin = require("uglifyjs-webpack-plugin");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  // 部署应用包时的URL
  publicPath: "/",
  // 生产环境构建输出目录
  outputDir: "dist",
  // 放置生成的静态资源目录
  assetsDir: "static",
  // 指定生成的index.html的路径
  indexPath: "index.html",
  // 生成的静态资源的hash，控制缓存
  filenameHashing: true,
  // 单页模式构建
  pages: undefined,
  // eslint-loader保存时是否检查，true为检查
  lintOnSave: true,
  // 是否使用包含运行时编译器Vue的核心构建
  runtimeCompiler: false,
  // 生产环境关闭sourcemap
  productionSourceMap: false,
  // devServe的配置
  devServer: {
    open: true, // 启动服务自动打开浏览器
    host: "127.0.0.1",
    port: 8089, // 端口
    https: false, // 不启用https
    hot: true // 开启模块热替换
  },
  // CSS的配置
  css: {
    requireModuleExtension: true, // 不启用css modules
    // 提取 CSS 在开发环境模式下是默认不开启的，因为它和 CSS 热重载不兼容
    // extract: false, // 启用css分离插件 ExtractTextPlugin
    sourceMap: false // 关闭css sourceMap
  },
  // 配置plugins多数使用configureWebpack
  configureWebpack: config => {
    if (env === "production") {
      config.plugins.push(
        // Gzip压缩
        new compressionWebpackPlugin({
          algorithm: "gzip", // 压缩算法
          test: new RegExp("\\.(js|css)$"), //只压缩js和css
          threshold: 10240, // 处理的文件的阈值
          minRatio: 0.8 // 压缩比率，小于的才会被处理
        })
      );
      // 压缩优化js
      config.plugis.push(
        new uglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ["console.log"] // 移除console.log
            }
          },
          sourceMap: false,
          parallel: true // 并行加速构建
        })
      );
    } else {
      config.devtool = "source-map";
    }
  },
  // 配置loaders多数使用chainWebpack
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"));
    config.output.filename("js/[name].[hash:4].js").end();
    config.module
      .rule("svg")
      .exclude.add(resolve("./src/assets/svg"))
      .end();
    config.module
      .rule("icon")
      .test(/\.svg$/)
      .include.add(resolve("./src/assets/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  }
};
