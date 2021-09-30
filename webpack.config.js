const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
    index: "./index.js",
  },
  resolve: {
    fallback: {
      fs: false,
      path: false
    }
  },
  module: {
    rules: [
      {
        test: /\.wasm$/,
        include: [
          /wasms/
        ],
        loader: "file-loader",
        type: "javascript/auto",
        sideEffects: true,
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.worker\.(c|m)?js$/i,
        include: /webm/,
        use: [
          {
            loader: "worker-loader",
            options: {
              filename: "/workers/[name].js",
            },
          },
        ],
        sideEffects: true, // force creation by simply referencing
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Emscripten Playground",
      template: "./app//html/index.html",
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  experiments: {
    asyncWebAssembly: true,
  },
};