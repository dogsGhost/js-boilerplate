JS Boilerplate
==============

Simple boilerplate application for quickly getting started on almost any JS-based project. Unopinionated enough to make switching templating languages or extending front-end technologies as easy as possible. Runnable out of the box, notable features:

The Stack
---------

- Express.js on the back-end with Jade as the default templating language. Pre-configured with a primary layout file. Gzipping is enabled by default.
- Browserify on the front-end for npm-style dependency management.
- Sass for CSS pre-processing.

Installation
============

It's as easy as this:

```
git clone https://github.com/davezuko/js-boilerplate.git
npm install
gulp build; gulp server

// or if you're lazy like me:
git clone https://github.com/davezuko/js-boilerplate.git; npm install; gulp build; gulp server
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

TODO
====

- find a better way to initialize gulp tasks with task-wide dependencies (currently each task is too tightly coupled to their call in gulpfile.js)
- Karma test runner
- Linting (client + server)
- Deployment tasks
- Image compression
- Different sass compiler? e.g. Ruby-Sass
