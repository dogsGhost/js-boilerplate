JS Boilerplate
==============

Simple boilerplate application for quickly getting started on almost any JS-based project. Unopinionated enough to make switching templating languages or extending front-end technologies as easy as possible. Runnable out of the box, notable features:

The Stack
---------

* Express.js on the back-end.
  - Jade templates by default
  - Gzip enabled by default
  - Pre-configured with routes for views/static assets
  - Support for environment-specific configuration

* Browserify on the front-end for npm-style dependency management.
  - Watchify with livereload
  - ES6 to ES5 transpiling by default

* Sass for CSS pre-processing (gulp-sass).
  - Autoprefixer
  - Livereload

* Gulp for build management
  - Edit-in-one-place configuration
  - Modularized (and auto-loaded) tasks
  - TODO: cache busting

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

If you'd like to make tweaks to the project or build structure, most changes can be made as configuration changes directly in:

```
build/config.js
```

**Note** Livereload browser extension is required if you wish to use that during development!

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

This project is structured to make use of environment-specific configuration files (and auto-ignores any file directly within a config folder not named "development" for your safety). Because of this, deployment is achieved fairly easily by modifying your NODE_ENV and ensuring that the tasks are updated to your liking. By default, there's a task:

```
gulp deploy:prod
```

Which explicitly sets your NODE_ENV to production, thereby modifying the behavior of specific tasks. For example, with this environment, front-end assets such as application bundles and styles are now minified.

Notes
=====

X-Forwarded-* Header
--------------------

Express apps commonly sit behind reverse proxies (e.g. nginx), so the default configuration provided enables express's "trust proxy" functionality. If you wish to modify this, you can find this flag in the server config as:

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

- Karma test runner
- Linting (client + server)
- Deployment tasks
- Image compression
- Different sass compiler? e.g. Ruby-Sass
- Jade precompiling (and/or caching)
- gtmetrix / google perf examples
- Task tracking with ":namespace" (e.g. ":watch", ":prod")
- Favicon