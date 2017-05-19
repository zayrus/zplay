var gulp = require('gulp')
  uglify = require('gulp-uglify')
var less = require('gulp-less')
var path = require('path')

gulp.task('minify', function () {
  gulp.src('js/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'))
})

gulp.task('less', function () {
  return gulp.src('./less/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./build/css'))
})
