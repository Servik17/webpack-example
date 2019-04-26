const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

function getJSLoaders() {
  return [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },
  ];
}

function getStyleLoaders(isProduction) {
  return [
    {
      test: /\.css$/,
      include: /node_modules/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
      ],
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: !isProduction,
          },
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: isProduction 
              ? '[name]__[local]___[hash:base64:5]' 
              : '[name]__[local]',
          },
        },
        {
          loader: 'postcss-loader',
        },
      ],
    },
  ];
}

function getFileLoaders(isProduction) {
  return [
    {
      test: /\.(png|jpg|gif)$/,
      loader: 'file-loader', 
      options: {
        name: isProduction
          ? '[name].[hash:base64:5].[ext]'
          : '[name].[ext]'
      },
    }
  ];
}

function getPlugins(isProduction) {
  return [
    new MiniCssExtractPlugin({
      filename: isProduction
        ? '[name].[hash].css'
        : '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'public', 'index.html'),
    }),
  ];
}

function getOptimization() {
  return {
    minimizer: [
      new UglifyJsPlugin(), 
      new OptimizeCSSAssetsPlugin()
    ],
  }
}

function getBaseParams(isProduction) {
  return {
    entry: path.resolve(process.cwd(), 'src', 'index.jsx'),
    output: {
      filename: isProduction 
        ? 'bundle.[hash].min.js'
        : 'bundle.js',
      path: path.resolve(process.cwd(), 'dist')
    },
    resolve: {
      extensions: ['.jsx', '.js', '.json']
    },
    devtool: isProduction ? undefined : 'inline-source-map',
  }
}

module.exports = {
  getJSLoaders,
  getStyleLoaders,
  getFileLoaders,
  getPlugins,
  getOptimization,
  getBaseParams,
}