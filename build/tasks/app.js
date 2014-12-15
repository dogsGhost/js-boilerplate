var gulp       = require('gulp'),
    common     = require('gulp-common'),
    source     = require('vinyl-source-stream'),
    watchify   = require('watchify'),
    browserify = require('browserify');

module.exports = function appTask (config, plugins) {

  // Module Constants ==============

  var BUNDLE_ENTRY = [
    config.app.src,
    config.app.entry
  ].join(config.PATH_JOIN);

  var BUNDLE_CONFIG = {
    cache        : {},
    debug        : true,
    entries      : [BUNDLE_ENTRY],
    fullPaths    : true,
    packageCache : {}
  };

  // ===============================

  gulp.task('app', function (callback) {
    bundle(getBundler(), callback);
  });

  gulp.task('app:watch', function () {
    var watcher = watchify(getBundler());
    
    watcher.on('update', function () {
      common.log('* Browserify file change detected.');
      bundle(watcher);
    });
    bundle(watcher);
  });

  function getBundler () {
    return browserify(BUNDLE_CONFIG);
  }

  function bundle (bundler, callback) {
    var start = now();

    if (common.isProd()) {
      bundler.plugin('minifyify', {
        map    : config.app.map,
        output : common.path(config.app.dest, config.app.map)
      });
    }

    bundler
      .bundle()
      .pipe(source(config.app.dist))
      .pipe(gulp.dest(config.app.dest))
      .on('end', function () {
        common.log('Bundle finished after: %s ms', (now() - start));
        if (callback && typeof callback === 'function') {
          callback();
        }
      });
  }

  function now () {
    return new Date().getTime();
  }

};