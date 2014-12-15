var path = require('path'),
    env  = process.env.NODE_ENV; // this is set (or defaulted) in ../config.js

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