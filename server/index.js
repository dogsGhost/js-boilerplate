// configuration =========================
var config = require('./config');

// module dependencies ===================
var fs          = require('fs'),
    logger      = require('morgan'),
    express     = require('express'),
    bodyParser  = require('body-parser'),
    compression = require('compression');

// server configuration ==================
var app = express(),
    server;

app.set('port', config.port || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(compression(config.gzip));

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
  console.log(err);
  res.status(err.status || 500);
  res.end('Server Error: ' + (err.status || 500));
});

// application exports ===================
app.start = function(port) {
  return server = app.listen(app.get('port'), function () {
    console.log('Server running on environment: ' + config.env);
    console.log('Server listening on port: ' + server.address().port);
  });
};

module.exports = app;