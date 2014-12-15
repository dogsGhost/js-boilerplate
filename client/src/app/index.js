var SampleModule = require('./sample');

var APP = {
  NAME : 'JS Boilerplate',
  DESC : 'Quick and easy boilerplate setup for Express, Sass, Karma, and Browserify!'
};

SampleModule
  .contain(APP.NAME, function () {
    SampleModule.log(APP.DESC);
  });