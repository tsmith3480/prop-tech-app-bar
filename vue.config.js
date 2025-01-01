const { defineConfig } = require("@vue/cli-service");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CspHtmlWebpackPlugin = require("csp-html-webpack-plugin");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      libraryTarget: "system",
    },
  },
  // chainWebpack: (config) => {
  //   if (config.plugins.has("SystemJSPublicPathWebpackPlugin")) {
  //     config.plugins.delete("SystemJSPublicPathWebpackPlugin");
  //   }
  // },
  filenameHashing: false,
});
