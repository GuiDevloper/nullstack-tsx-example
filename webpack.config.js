const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const [server, client] = require('nullstack/webpack.config')

function useForkTS(config) {
  if (config.mode === 'development') {
    config.plugins.push(new ForkTsCheckerWebpackPlugin())
  }
  return config
}

function configFactory(original) {
  return (...args) => {
    let config = original(...args)
    config = useForkTS(config)

    return config
  }
}

const customClient = configFactory(client)

module.exports = [server, customClient]
