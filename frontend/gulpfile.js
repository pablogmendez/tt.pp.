var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server({
    root: './app',
    livereload: true
  })
});

gulp.task('copy', function() {
  gulp.src('app/*')
  .pipe(gulp.dest('dist'));
   gulp.src('bower_components')
  .pipe(gulp.dest('dist'))

});

gulp.task('default', ['copy', 'webserver']);