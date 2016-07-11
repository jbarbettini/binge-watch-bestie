'use strict';
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');
var proxy = require('proxy-middleware');
var url = require('url');

// The paths to our app files
var paths = {
  src: {
    scripts: ['client/app/**/*.js'],
    html: ['client/app/**/*.html', 'client/index.html'],
    styles: ['client/styles/styles.css']
  },
  server: 'server/server.js'
};

/***************************************
 *                ES5
 ***************************************/

// Start our node server using nodemon
gulp.task('serve', function () {
  nodemon({
    script: paths.server,
    ignore: ['node_modules/**/*.js', 'client/**/*.js']
  });
});

gulp.task('browser-sync', function() {
  var proxyOptions = url.parse('http://localhost:8080/api');
  proxyOptions.route = '/api';

  browserSync({
    open: true,
    port: 3000,
    server: {
      baseDir: "./client",
      middleware: [proxy(proxyOptions)]
    },
    files: paths.src.scripts.concat(paths.src.html, paths.src.style)
  })
});

// Any changes made to your client side code will
// automagically refresh your page with the new changes
gulp.task('start', ['serve', 'browser-sync']);

// Use ES5 by default
gulp.task('default', ['start']);