var path = require('path');

// TODO: shouldn't have to care about relative paths
module.exports = exports = {
  server: {
    listenPort : 3000,
    distFolder : path.resolve(__dirname, '../../client/dist'),
    static     : {
      // cacheControl: 86400000 * 14 // 2 weeks
      cacheControl: 86400000 * 0 // DEBUG ONLY
    }
  }
};