var gulp   = require('gulp'),
    common = require('gulp-common');

module.exports = function serverTask (config, plugins) {
  var app = require('../../server'),
      server;

  gulp.task('server', function () {
    server = app.start();
  });

  gulp.task('server:watch', function () {

  });
};