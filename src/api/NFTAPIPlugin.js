const { BasePlugin } = require('lisk-sdk');
const pJSON = require('../../package.json');

class NFTAPIPlugin extends BasePlugin {
  _server = undefined;
  _app = undefined;
  _channel = undefined;
  _db = undefined;
  _nodeInfo = undefined;

  static get alias() {
    return 'NFTHttpApi';
  }

  static get info() {
    3;
    return {
      author: pJSON.author,
      version: pJSON.version,
      name: pJSON.name,
    };
  }

  get defaults() {
    return {};
  }

  get events() {
    return [];
  }

  get actions() {
    return {};
  }
}

module.exports = { NFTAPIPlugin };
