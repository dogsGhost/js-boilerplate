var path = require('path'),
    env  = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    base = path.resolve(__dirname, '../');

module.exports = exports = require('./config/' + env)(base);
exports.env = env;