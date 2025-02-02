const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  config.resolve.fallback = {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "url": require.resolve("url"),
    "vm": require.resolve("vm-browserify")
  };

  // Ajoutez une règle pour forcer Webpack à traiter react-native-swiper en mode CommonJS
  config.module.rules.push({
    test: /react-native-swiper[\\/]index\.js$/,
    type: 'javascript/auto',
  });
    config.output.publicPath = '/';

  return config;
};
