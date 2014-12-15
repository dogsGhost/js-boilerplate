var express = require('express');

module.exports = function (app, config) {

  app.use('/static', express.static(config.static.dest, {
    maxAge: config.static.expires
  }));
  
  app.use('/static', function (req, res, next) {
    res.status(404).end();
  });

};