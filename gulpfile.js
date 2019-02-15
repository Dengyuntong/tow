var gulp = require('gulp');
var sass = require('gulp-sass')

//编译sass
gulp.task('devSass', function() {
    gulp.src('./src/scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css/'))
})

//监听scss
gulp.task('watch', function() {
    gulp.watch('./src/scss/*.scss', gulp.series('devSass'))
})

//串行执行
gulp.task('build', gulp.parallel('devSass', 'watch'))