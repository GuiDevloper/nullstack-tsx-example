const [server, client] = require('nullstack/webpack.config');

function useTSX(config) {
  config.module.rules = config.module.rules.map(rule => {
    if (!rule.test) return rule;

    if (((rule.resolve || {}).extensions || []).includes('.nts')) {
      const ntsId = rule.resolve.extensions.indexOf('.nts');
      rule.resolve.extensions[ntsId] = '.tsx';
    }

    const ruleTest = rule.test.source;
    const isNTS = ruleTest.indexOf('nts') > -1;
    return {
      ...rule,
      test: isNTS ? new RegExp(ruleTest.replace('nts', 'tsx')) : rule.test
    }
  })

  return config;
}

function configFactory(original) {
  return (...args) => {
    let config = original(...args);
    config = useTSX(config);

    return config;
  }
}

const customClient = configFactory(client);
const customServer = configFactory(server);

module.exports = [customServer, customClient]