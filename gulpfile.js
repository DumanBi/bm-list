'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

gulp.task('default', function () {
  return gulp.src('*.html')
    .pipe(templateCache('template.js', {
      module: 'soc-faf-bmList'
    }))
    .pipe(gulp.dest('./'));
});
