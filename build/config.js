module.exports = exports = {};


// --------------------------
// Common Paths
// --------------------------
var BASE      = exports.BASE      = '.'; // project root (not relative to this file)
var PATH_JOIN = exports.PATH_JOIN = '/';
var _slice    = [].slice;

function path () {
  return _slice.call(arguments).join(PATH_JOIN);
}

// environment constants
exports.env = {};
exports.env.DEV = exports.env.DEVELOPMENT = 'development';
exports.env.PROD = exports.env.PRODUCTION = 'production';

// static client files
exports.client      = {};
exports.client.base = path(exports.BASE, 'client');
exports.client.src  = path(exports.client.base, 'src');
exports.client.dest = path(exports.client.base, 'dist');

// --------------------------
// Client Application
// --------------------------
exports.app       = {};
exports.app.entry = 'index.js';
exports.app.dist  = 'app-bundle.js';
exports.app.map   = exports.app.dist.replace('.js', '.map.json');
exports.app.src   = path(exports.client.src, 'app');
exports.app.dest  = path(exports.client.dest, 'app');

// --------------------------
// Sass
// --------------------------
exports.sass = {
  src       : path(exports.client.src, 'sass'),
  dest      : path(exports.client.dest, 'css'),
  prefix    : ['last 2 versions', '> 2%'],
  cssMinify : {
    keepSpecialComments : 0
  }
};

// --------------------------
// Code Quality (JS)
// --------------------------
exports.js = {};
exports.js.globals = {
  'console'     : true,
  'alert'       : false,
  'document'    : false,
  'window'      : false,
  'setInterval' : false,
  'setTimeout'  : false,
  'Image'       : false,
  'require'     : false,
  'exports'     : true,
  'module'      : true
};

exports.lint = {
  'bitwise'   : false,
  'camelcase' : true,
  'curly'     : false,
  'eqeqeq'    : true,
  'forin'     : true,
  'immed'     : true,
  'indent'    : 2,
  'latedef'   : false,
  'noarg'     : true,
  'noempty'   : true,
  'nonew'     : false,
  'plusplus'  : false,
  'quotmark'  : 'single',
  'undef'     : true,
  'unused'    : false,
  'strict'    : false,
  'maxparams' : false,
  'maxdepth'  : false,
  'maxlen'    : 80,
  'forin'     : false,
  'globals'   : exports.js.globals
};

// --------------------------
// Karma Testing
// --------------------------
exports.karma = {
  basePath : process.cwd(),

  port      : 8000,
  colors    : true,
  autoWatch : true,
  logLevel  : 'INFO',

  files : [
    path(exports.client.dest, exports.app.dist)
      .replace(exports.BASE + exports.PATH_JOIN, '')
  ],
  exclude : [],

  browsers : ['PhantomJS'],
  plugins  : [
    'karma-mocha',
    'karma-phantomjs-launcher',
    'karma-chai',
    'karma-sinon-chai',
    'karma-mocha-reporter'
  ],
  frameworks : ['mocha', 'chai', 'sinon-chai'],
  reporters  : ['mocha'],
};