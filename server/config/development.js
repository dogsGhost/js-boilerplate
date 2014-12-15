// TODO: shouldn't have to care about relative paths
var path = require('path');
var env  = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = exports = {
  env  : env,
  port : 3000,
  gzip : {
    threshold : 200
  },
  static : {
    dest    : path.resolve(__dirname, '../../client/dist'),
    expires : 86400000 * 7 // 1 week
  }
};