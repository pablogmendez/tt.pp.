var gulp = require('gulp');
var connect = require('gulp-connect');
var webserver = require('gulp-webserver');
/*
gulp.task('webserver', function() {
  connect.server({
    root: 'app',
    livereload: true
  })
});
*/


gulp.task('serve', function() {
  gulp.src('app')
    .pipe(webserver({
      port:'9090',
      livereload: true,
      open: true,
      fallback: './app/index.html'
    }));
});

gulp.task('copy', function() {
  gulp.src('app/*')
  .pipe(gulp.dest('dist'));
   gulp.src('bower_components')
  .pipe(gulp.dest('dist'))

});

gulp.task('default', ['serve']);