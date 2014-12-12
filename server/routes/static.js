var express = require('express');

module.exports = function (app, config) {

  app.use('/static', express.static(config.server.distFolder, {
    maxAge: config.server.static.cacheControl
  }));
  
  app.use('/static', function (req, res, next) {
    res.status(404).end();
  });

};