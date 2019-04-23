const path = require('path');
const { getLocalIdent } = require('css-loader/dist/utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(process.cwd(), 'src', 'index.tsx'),
  output: {
    filename: 'bundle.js',
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]',
              sourceMap: true,
              getLocalIdent: function (loaderContext, localIdentName, localName, options) {
                return loaderContext.resourcePath.includes('node_modules')
                  ? localName
                  : getLocalIdent(loaderContext, localIdentName, localName, options);
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
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
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
};