'user strict';

var gulp         = require('gulp');
var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');

// Static server
gulp.task('watch', function() {

    gulp.watch( ["./js/*.js"], ['js'] );

});

gulp.task('js', function(){

    gulp.src('./js/bc-monitor-content.js')
        .pipe(uglify())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe( gulp.dest('./dist/content_scripts') );

    gulp.src('./js/options.js')
        .pipe(uglify())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe( gulp.dest('./dist/options') );

});

gulp.task('default',[ 'watch']);