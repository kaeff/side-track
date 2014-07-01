var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var serve = require('gulp-serve');


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
  gulp.watch('./src/*.js', ['js']);
});

gulp.task('js', function() {
  return gulp.src( './src/**/*.js')
    .pipe(gulp.dest('./build/'));
});

gulp.task('deps', function() {
  return gulp.src([
      './bower_components/bootstrap/dist/**/*',
      './bower_components/swiper/dist/**/*'
    ])
    .pipe(gulp.dest('./build/'));
});

gulp.task('serve', serve('build'));

gulp.task('build', ['js', 'sass', 'templates', 'deps']);
gulp.task('default', ['build', 'watch']);
//gulp.task('default', ['slim', 'sass']);
