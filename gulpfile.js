var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var bs = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./"
        },
        notify: false,
    });
});
gulp.task('minify', function () {
    gulp.src('js/concataneted.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/min.js'));
});

gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('js/mainJs'));
});

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 4 versions','true'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('watch', ['browser-sync', 'sass', 'scripts'], function () {
    gulp.watch("./sass/**/*.scss", ['sass'], bs.reload);
    gulp.watch("./sass/**/*.sass", ['sass'], bs.reload);
    gulp.watch("js/*.js", ['scripts'], bs.reload);
    gulp.watch('./*.html', bs.reload)
});