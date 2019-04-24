const {
  getFileLoaders,
  getPlugins,
  getStyleLoaders,
  getJSLoaders,
  getBaseParams,
} = require('./helpers');

module.exports = {
  ...getBaseParams(),
  module: {
    rules: [
      ...getJSLoaders(),
      ...getStyleLoaders(),
      ...getFileLoaders(),
    ],
  },
  plugins: getPlugins(),
};