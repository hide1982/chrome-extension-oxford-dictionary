import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import _ from "lodash"

import type { Configuration, RuleSetRule } from "webpack"
import type { webpackTypes } from "./types"

const ruleTs: RuleSetRule = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
}

const common: Configuration = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [ruleTs],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".ts", ".tsx", ".js", ".json", ".svg", "png"],
  },
}

const prod: Configuration = {}

const dev: Configuration = {
  entry: {
    app: "./src/App.tsx",
  },
  output: {
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    port: 9090,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
  ],
}

const configurationFactory: webpackTypes.ConfigurationFactory = (env, args) => {
  if (args.mode === "development") {
    return _.merge(common, dev)
  }

  if (args.mode === "production") {
    return _.merge(common, prod)
  }

  return common
}

export default configurationFactory
