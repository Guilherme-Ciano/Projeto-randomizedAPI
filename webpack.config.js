const path = require("path");
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  resolve: {
    fallback: {
      path: false,
      stream: false,
      fs: false,
      async_hooks: false,
    },
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  plugins: [new NodePolyfillPlugin()],
};
