var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development'; 
module.exports = exports = require('./config/' + env);
exports.env = env;