var gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    babel = require('babel-core/register'),
    gutil = require('gulp-util');

gulp.task('test', () => {
  return gulp.src(['test/**/*.js'])
    .pipe(mocha({
      compilers: {
        js: babel
      }
    }));
});

gulp.task('default', function() {
  gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});
