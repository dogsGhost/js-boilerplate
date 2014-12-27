JS Boilerplate
==============

Simple boilerplate application for quickly getting started on almost any JS-based project. Unopinionated enough to make switching templating languages or extending front-end technologies as easy as possible. Runnable out of the box, notable features:

The Stack
---------

- Express.js on the back-end with Jade as the default templating language. Pre-configured with a primary layout file. Gzipping is enabled by default.
- Browserify on the front-end for npm-style dependency management.
- Sass for CSS pre-processing (currently uses gulp-sass).

Installation
============

If you're lazy like me:

```
git clone https://github.com/davezuko/js-boilerplate.git; npm install; gulp build; gulp server
```

Here's the step-by-step list in a more readable format. It's a super easy installation process:

```
git clone https://github.com/davezuko/js-boilerplate.git
npm install
gulp build
gulp server
```

If you'd like to make tweaks to the project structure, most changes can be made directly in:

```
build/config.js
```

By changing primary paths. Tasks are also located within the build directory, and it's incredibly easy to update the build task (such as "bundle" for the front-end) to support technologies such as React!

Development
===========

If you're actively developing the project, we've got you covered. Simply make use of the development task with:

```
gulp dev
```

Which will run an initial build, spin up your server, and then kick off watch tasks to make your life easier as you edit any JavaScript, Sass, Images, and server files!

Each component type also comes with its own individual watch task, in the event that you wish to use it independently. For example:

```
gulp app:watch
gulp sass:watch
gulp img:watch
gulp server:watch
```

Gulp tasks are auto-loaded from the build/tasks directory, so if you need to add your own just create a new file! It may be helpful to check out existing task exports, because each task module is injected with common dependencies. An example task exports:

```js
module.exports = function (config, plugins) {
  
  gulp.task('yourCustomTask', function () {

  });

};
```

Where config is the configuration file from build/config.js and plugins are auto-loaded from the devDependencies specified within your package.json.

Deployment
==========

This project is structured to make use of environment-specific configuration files (and auto-ignores any file directly within a config folder not named "development" for your safety). Because of this, deployment is achieved fairly easily simply by modifying your NODE_ENV and ensuring that the tasks are updated to your liking. By default, there's a task:

```
gulp deploy:prod
```

Which explicitly sets your NODE_ENV to production, thereby modifying the behavior of specific tasks. For example, with this environment, front-end assets such as application bundles and styles are now minified.

Notes
=====

X-Forwarded-* Header
--------------------

Express apps commonly sit behind reverse proxies (e.g. nginx), so the default configuration provided enables the "trust proxy" functionality within nginx. If you wish to modify this, you can modify this flag in the server config as:

```js
{
  proxy : {
    trust : true
  }
}
```

Style Guide
===========

- Paths should **not** end in a trailing slash.
- 2 spaces for indentation **everywhere**.

TODO
====

- find a better way to initialize gulp tasks with task-wide dependencies (currently each task is too tightly coupled to their call in gulpfile.js)
- Karma test runner
- Linting (client + server)
- Deployment tasks
- Image compression
- Different sass compiler? e.g. Ruby-Sass
- Jade precompiling (and/or caching)
- gtmetrix / google perf examples
- Task tracking with ":namespace" (e.g. ":watch", ":prod")
- Favicon