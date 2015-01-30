var gulp   = require('gulp'),
    common = require('gulp-common');

module.exports = function defaultTask (config, plugins) {

  gulp.task('build', ['app', 'assets'], function () {
    // done...
  });

  gulp.task('dev', ['app:watch', 'assets:watch', 'server:watch'], function () {
    // done...
  });

  gulp.task('deploy', ['build'], function () {
    gulp.start('server');
  });

  gulp.task('deploy:prod', function (callback) {
    process.env.NODE_ENV = config.env.PRODUCTION;
    common.log('Forced Node environment to: %s', common.env());
    
    gulp.start('build');
  });

};