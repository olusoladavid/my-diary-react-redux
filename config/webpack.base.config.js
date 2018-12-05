/* eslint-disable */

const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const APP_DIR = path.resolve(__dirname, "../src");

module.exports = env => {
  const { PLATFORM } = env;
  return merge([
    {
      entry: ["@babel/polyfill", APP_DIR],
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader", "eslint-loader"]
          },
          {
            test: /\.scss$/,
            use: [PLATFORM === "production" ? MiniCssExtractPlugin.loader : "style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.module\.scss$/,
            use: [
              PLATFORM === "production" ? MiniCssExtractPlugin.loader : "style-loader",
              "css-loader?modules=true",
              "sass-loader"
            ]
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: "file-loader",
                options: {}
              }
            ]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(env.VERSION),
          "process.env.PLATFORM": JSON.stringify(env.PLATFORM)
        })
      ]
    }
  ]);
};
