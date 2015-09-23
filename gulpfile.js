'use strict';

var jshint = require('gulp-jshint');
var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util');
var del = require('del');
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var stylish = require('jshint-stylish');
var run = require('gulp-run');

var paths = {
    src: 'src',
    dist: 'dist',
    tests: 'tests'
};

exports.errorHandler = function(title) {
    return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};

gulp.task('clean', function (done) {
    var foldersToDelete = [
        path.join(paths.dist, '/')
    ];
    del(foldersToDelete, done);
});

gulp.task('lint', function() {
    var jsToLint = [
        paths.src + '/**/*.js',
        paths.tests + '/**/*.js',
        'gulpfile.js'
    ];

    return gulp.src(jsToLint)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task("build", function () {
    return gulp.src(paths.src + "/**/*.js")
        .pipe(babel())
        .pipe(concat("index.js"))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('test', ['build'], function () {
    run('npm run test').exec();
});

gulp.task('test:watch', function() {
    gulp.watch('./**/*.js', ['test']);
});

gulp.task('default', ['lint', 'clean', 'build']);