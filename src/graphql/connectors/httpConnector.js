const request = require('request-promise-native');
const url = require('url');
const config = require('config');

class HTTPConnecttor {

  static async get(path){
    const urlString = `${config.get('MS.url')}${path}`
    const body = await request.get(urlString);
    return JSON.parse(body);
  };

}

module.exports = HTTPConnecttor;