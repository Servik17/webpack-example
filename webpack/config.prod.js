const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getLocalIdent } = require('css-loader/dist/utils');

module.exports = {
  entry: path.resolve(process.cwd(), 'src', 'index.tsx'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(process.cwd(), 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              getLocalIdent: function (loaderContext, localIdentName, localName, options) {
                return loaderContext.resourcePath.includes('node_modules')
                  ? localName
                  : getLocalIdent(loaderContext, localIdentName, localName, options);
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src', 'index.html'),
    })
  ],
};