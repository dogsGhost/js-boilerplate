var _exports = { require : require };
var _inject  = [
  require('./build/config'),
  require('gulp-load-plugins')({
    scope: ['devDependencies']
  }),
  _exports
];

require('gulp-common')
  .loadTasks(__dirname + '/build/tasks', _inject);