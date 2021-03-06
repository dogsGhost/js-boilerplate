// configuration =========================
var config       = require('./config'),
    DEFAULT_PORT = 3000;

// module dependencies ===================
var fs          = require('fs'),
    logger      = require('morgan'),
    express     = require('express'),
    bodyParser  = require('body-parser'),
    compression = require('compression');

// server configuration ==================
var app = express(), server;

app.set('port',
  typeof config.port !== undefined ? config.port : DEFAULT_PORT
);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// optional configuration
if (config.gzip && config.gzip.enabled) {
  app.use(compression(config.gzip));
}
if (config.proxy && config.proxy.trust) {
  app.enable('trust proxy');
}

// views and templating
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// routes ================================
fs.readdirSync(__dirname + '/routes')
  .forEach(function (route) {
    require('./routes/' + route)(app, config);
  });

// error handling (must be included after all route definitions)
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  var status = err.status || 500;

  console.log(err);
  res.status(status);
  res.end('Server Error: ' + status);
});

// application exports ===================
app.start = function (port) {
  return server = app.listen(app.get('port'), function () {
    console.log.apply(console, [
      '\nServer Started         ',
      '\n========================',
      '\nEnv  : ' + process.env.NODE_ENV,
      '\nPort : ' + server.address().port,
      '\n------------------------'
    ]);
  });
};

module.exports = app;