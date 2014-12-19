require('gulp-common')
  .loadTasks(
    __dirname + '/build/tasks',
    [
      require('./build/config'),
      require('gulp-load-plugins')({
        scope: ['devDependencies']
      })
    ]
  );