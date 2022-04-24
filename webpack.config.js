const [server, client] = require('nullstack/webpack.config');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { useTSX } = require('nullstack-helpers/configs');

function useForkTS(config) {
  if (config.entry.indexOf('client') > -1) {
    config.plugins.push(new ForkTsCheckerWebpackPlugin());
  }
  return config;
}

function configFactory(original) {
  return (...args) => {
    let config = original(...args);
    config = useTSX(config);
    config = useForkTS(config);

    return config;
  }
}

const customClient = configFactory(client);
const customServer = configFactory(server);

module.exports = [customServer, customClient]