// Js
let gulp = require("gulp");
let uglify = require('gulp-uglify-es').default;

// Css 
var uglifycss = require('gulp-uglifycss');

// File paths
const files = {
    cssPath: 'css/*.css',
    jsPath: 'js/*.js'
}

gulp.task('css', function () {
    gulp.src(files.cssPath)
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./prod-css'));
});

gulp.task('js', function () {
    return gulp.src(files.jsPath)
        .pipe(uglify())
        .pipe(gulp.dest('./prod-js'));
});
/*
gulp.task('watch', function () {
    gulp.watch('./css/*.css', 'css');
    gulp.watch('./js/*.js', 'js');
});*/

gulp.task('default', gulp.parallel('css', 'js'));