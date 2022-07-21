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
    },
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  plugins: [],
};
