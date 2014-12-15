var gulp   = require('gulp'),
    common = require('gulp-common');

module.exports = function assetsTask (config, plugins, exports) {

  gulp.task('assets', ['sass', 'img'], function () {
    // done...
  });

  gulp.task('assets:watch', ['sass:watch', 'img:watch'], function () {

  });

  gulp.task('sass', function () {
    gulp.src(config.sass.src + '/*.scss')
      .pipe(plugins.plumber())
      .pipe(plugins.sass())
      .pipe(plugins.autoprefixer.apply(config.sass.prefix))
      .pipe(plugins.minifyCss(config.sass.cssMinify))
      .pipe(gulp.dest(config.sass.dest));
  });

  gulp.task('sass:watch', ['sass'], function () {
    gulp.watch(config.sass.src + '/**/*.scss', ['sass']);
  });

  // TODO: move paths to config
  // TODO: compression
  gulp.task('img', function () {
    gulp.src(config.client.src + '/img/**/*')
      .pipe(gulp.dest(config.client.dest + '/img'));
  });

  gulp.task('img:watch', ['img'], function () {
    gulp.watch(config.client.src + '/img/**/*', ['img']);
  });
};