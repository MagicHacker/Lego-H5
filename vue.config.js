// vue-cli3配置文件
const env = process.env.NODE_ENV;
const path = require("path");
const resolve = dir => {
  return path.join(__dirname, dir);
};
module.exports = {
  configureWebpack: config => {
    config.output.devtoolModuleFilenameTemplate = info => {
      const resPath = info.resourcePath;
      if (
        (/\.vue$/.test(resPath) && !/type=script/.test(info.identifier)) ||
        /node_modules/.test(resPath)
      ) {
        return `webpack:///${resPath}?${info.hash}`;
      }
      return `webpack:///${resPath.replace("./src", "my-code/src")}`;
    };
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("assets", resolve("src/assets"))
      .set("@", resolve("src"));
    config.output.filename("[name].js?[hash]").end();
  }
};
