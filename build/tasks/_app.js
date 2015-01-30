var gulp       = require('gulp'),
    common     = require('gulp-common'),
    source     = require('vinyl-source-stream'),
    watchify   = require('watchify'),
    browserify = require('browserify');

module.exports = function appTask (config, plugins) {

  function getBundler () {
    return browserify(config.app.bundle)
  }

  gulp.task('app', function (callback) {
    bundle(getBundler(), callback);
  });

  gulp.task('app:watch', function () {
    var watcher = watchify(getBundler());
  
    bundle(watcher);
    watcher.on('update', function () {
      bundle(watcher);
    });
    plugins.livereload.listen(config.client.reload);
  });

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
      .on('error', function (err) {
         common.log(err.message);
         this.emit('end');
      })
      .on('end', function () {
        common.log('Bundle finished after: %s ms.', (now() - start));
        callback && callback();
      })
      .pipe(source(config.app.dist))
      .pipe(gulp.dest(config.app.dest))
      .pipe(plugins.livereload())
  }

  function now () {
    return new Date().getTime();
  }
};