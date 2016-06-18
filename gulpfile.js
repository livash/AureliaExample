var gulp = require('gulp'),
    jshint = require('gulp-jshint');

// configure the jshint task
gulp.task('lint', function() {
  return gulp.src('./src/**/*.js')
      //.pipe(jshint())
      .pipe(jshint('.jshintrc'))
      .pipe(jshint.reporter('jshint-stylish'));
});