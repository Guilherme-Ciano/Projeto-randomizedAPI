const path = require("path");
const webpack = require("webpack");
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
      http: false,
      crypto: false,
      zlib: false,
      string_decoder: false,
      querystring: false,
      string_decoder: false,
      url: false,
      buffer: false,
      util: false,
    },
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  plugins: [],
};
