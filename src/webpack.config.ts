import * as path from "path";
import * as webpack from "webpack";

const ENTRY_POINTS = {
  development: [
    "webpack-hot-middleware/client",
    "react-hot-loader/patch",
    "./src/index.tsx",
  ],
  production: ["./src/index.tsx"],
};

const ENV = process.env.NODE_ENV || "development";

const PLUGINS = {
  development: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "'development'",
      },
    }),
  ],
  production: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "'production'",
      },
    }),
  ],
};

const DEV_TOOLS = {
  development: "eval",
  production: "source-map",
};

export const webpackConfig: webpack.Configuration = {
  devtool: DEV_TOOLS[ENV],
  entry: ENTRY_POINTS[ENV],
  module: {
    rules: [
      {
        include: [path.join(__dirname, "..", "src")],
        test: /\.(tsx|ts|js)/,
        use: ["react-hot-loader/webpack", "ts-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.json$/,
        use: "json-loader",
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "..", "dist"),
    publicPath: "/dist/",
  },
  plugins: PLUGINS[ENV],
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },
};

export default webpackConfig;
