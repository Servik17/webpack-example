const {
  getFileLoaders,
  getPlugins,
  getStyleLoaders,
  getJSLoaders,
  getBaseParams,
  getOptimization,
} = require('./helpers');

const isProduction = true;

module.exports = {
  ...getBaseParams(isProduction),
  module: {
    rules: [
      ...getJSLoaders(),
      ...getStyleLoaders(isProduction),
      ...getFileLoaders(isProduction),
    ]
  },
  plugins: getPlugins(isProduction),
  optimization: getOptimization(),
};