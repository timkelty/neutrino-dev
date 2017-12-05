const merge = require('deepmerge');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = ({ config }, opts = {}) => {
  const options = merge({
    pluginId: 'style-minify',
    plugin: {}
  }, opts);

  config
    .plugin(options.pluginUseId)
    .use(OptimizeCssPlugin, [options.plugin]);
}