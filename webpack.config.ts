// for `tsconfig-paths-webpack-plugin` problem. see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32#issuecomment-642377943
delete process.env.TS_NODE_PROJECT

import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import _ from "lodash"
import TsconfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin"

const ruleTs = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
}

const ruleSvg = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
    },
  ],
}

const common = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  module: {
    rules: [ruleTs, ruleSvg],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".ts", ".tsx", ".js", ".json", ".svg", ".png"],
    plugins: [new TsconfigPathsWebpackPlugin()],
  },
}

const prod = {}

const devServe = {
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

const dev = {
  entry: {
    app: "./src/App.tsx",
    background: "./src/background.ts",
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/manifest.json",
        },
        {
          from: "images/*",
        },
      ],
    }),
  ],
}

const configurationFactory = (env, args) => {
  if (args.mode === "development") {
    if (env && env["WEBPACK_SERVE"]) {
      return _.merge(common, devServe)
    }

    return _.merge(common, dev)
  }

  if (args.mode === "production") {
    return _.merge(common, prod)
  }

  return common
}

module.exports = configurationFactory
