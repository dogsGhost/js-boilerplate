// configuration =========================
var config = require('./config');

// core modules ==========================
var express  = require('express');

// module dependencies ===================
var fs      = require('fs'),
    path    = require('path'),
    logger  = require('morgan'),
    compression = require('compression'),
    bodyParser  = require('body-parser');

// server configuration ==================
var app = express(),
    server;

app.set('port', config.listenPort || 3000);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(compression({
  threshold: 200
}));

// views and templating
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// routes ================================
fs.readdirSync(__dirname + '/routes')
  .forEach(function(route) {
    require('./routes/' + route)(app, config);
  });

// error handling ========================
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.end('Server Error: ' + (err.status || 500));
});

// application exports ===================
app.start = function(port) {
  return server = app.listen(port || app.get('port'), function() {
    console.log('Server running on environment: ' + config.env);
    console.log('Server listening on port ' + server.address().port);
  });
};

module.exports = app;