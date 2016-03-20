var gulp = require('gulp');
var webserver = require('gulp-webserver');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

var paths = {
    scripts : ['/src/js/*.js'],
    styles : ['/src/scss/*.scss']
};

gulp.task('serve', function() {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});