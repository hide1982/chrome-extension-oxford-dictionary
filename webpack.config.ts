// for `tsconfig-paths-webpack-plugin` problem. see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32#issuecomment-642377943
delete process.env.TS_NODE_PROJECT

import path from "path"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import _ from "lodash"
import TsconfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin"

import type { Configuration, RuleSetRule } from "webpack"
import type { webpackTypes } from "./types"

const ruleTs: RuleSetRule = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
}

const ruleSvg: RuleSetRule = {
  test: /\.svg$/,
  use: [
    {
      loader: "@svgr/webpack",
    },
  ],
}

const common: Configuration = {
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

const prod: Configuration = {}

const dev: Configuration = {
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
