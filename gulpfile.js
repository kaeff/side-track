var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');


gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  return gulp.src('./src/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('sass', function() {
  return gulp.src('./src/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/*.scss', ['sass']);
  gulp.watch('./src/*.jade', ['templates']);
});


gulp.task('build', ['sass', 'templates']);
gulp.task('default', ['build', 'watch']);
//gulp.task('default', ['slim', 'sass']);
