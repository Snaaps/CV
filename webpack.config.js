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
    "vm": require.resolve("vm-browserify"),
    'expo/dom': false,
    'expo/dom/global': false,
  };

  // Ajout d'alias pour rediriger vers notre module vide
  config.resolve.alias = {
    ...(config.resolve.alias || {}),
    'expo/dom': path.resolve(__dirname, 'emptyModule.js'),
    'expo/dom/global': path.resolve(__dirname, 'emptyModule.js'),
  };

    config.output.publicPath = '/';

  return config;
};
