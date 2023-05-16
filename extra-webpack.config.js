const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;

module.exports = (config, options) => {
  const defaultConfig = singleSpaAngularWebpack(config, options);
  // defaultConfig.entry.main = [...new Set(defaultConfig.entry.main)];
  return defaultConfig
};
