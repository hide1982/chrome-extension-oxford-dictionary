// for `tsconfig-paths-webpack-plugin` problem. see https://github.com/dividab/tsconfig-paths-webpack-plugin/issues/32#issuecomment-642377943
delete process.env.TS_NODE_PROJECT

import path from "path"
import { CleanWebpackPlugin } from "clean-webpack-plugin"
import CopyWebpackPlugin from "copy-webpack-plugin"
import { merge } from "lodash"
import TsconfigPathsWebpackPlugin from "tsconfig-paths-webpack-plugin"
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer"

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
  entry: {
    app: "./src/App.tsx",
    background: "./src/background.ts",
  },
  module: {
    rules: [ruleTs, ruleSvg],
  },
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
    extensions: [".ts", ".tsx", ".js", ".json", ".svg", ".png"],
    plugins: [new TsconfigPathsWebpackPlugin()],
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

const prod: Configuration = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
  },
}

const dev: Configuration = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
}

const configurationFactory: webpackTypes.ConfigurationFactory = (env, args) => {
  if (process.env.ANALYZER_REPORT === "true") {
    common.plugins.push(new BundleAnalyzerPlugin())
  }

  if (args.mode === "development") {
    const config = merge(common, dev)

    return config
  }

  if (args.mode === "production") {
    return merge(common, prod)
  }

  return common
}

export default configurationFactory
