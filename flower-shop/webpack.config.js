const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, "src/ts/index"),

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js',
    assetModuleFilename: '[name][ext]',
  },

  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        filename: "index.html",
        favicon: path.join(__dirname, 'src', 'favicon.ico'),
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
        from: path.resolve(__dirname, "src/assets/img"),
        to: path.resolve(__dirname, "dist/assets/img"),
        },
      ],
    }),
  ],

module: {
  rules: [
    {
      test: /\.ts$/i,
      use: "ts-loader",
    },

    {
      test: /\.(jpg|png|svg|jpeg|gif)$/,
      type: 'asset/resource',
    },

    {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
    },

  ],
 },

resolve: {
  alias: {
    img: path.join(__dirname, "src", "assets/img"),
  },
  extensions: ['.ts', '.js'],
},

devServer: {
  open: true,
  host: "localhost",
},

};
