var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');
var header = require('gulp-header');
var runSequence = require('gulp-run-sequence');
var templates = require('gulp-angular-templatecache');
var less = require('gulp-less');

var pkg = require('./bower.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

var paths = {
  tmp: '.tmp',
  src: 'src',
  dist: 'dist',
  less: ['src/less/mfab.less'],
  scripts: ['src/**/*.js'],
  templates: ['src/templates/*.tpl.html']
};

/**
 * Dist
 */
gulp.task('dist', function (done) {
  runSequence('clean:dist', ['dist:concat', 'dist:css'], 'clean:tmp', done);
});

gulp.task('dist:templates', ['clean:tmp'], function () {
  var module = pkg.name + '.templates';
  return gulp.src(paths.templates)
    .pipe(templates({
      module: module,
      root: 'templates'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('dist:css', function () {
  return gulp.src(paths.less)
    .pipe(less())
    .pipe(gulp.dest(paths.dist));
});

gulp.task('dist:concat', ['dist:templates'], function () {
  var templates = [paths.tmp + '/templates.js'];
  return gulp.src(paths.scripts.concat(templates))
    .pipe(concat(pkg.name + '.js'))
    .pipe(header(banner, { pkg: pkg } ))
    .pipe(gulp.dest(paths.dist));
});

/**
 * Clean
 */
gulp.task('clean', ['clean:dist', 'clean:tmp']);

gulp.task('clean:tmp', function() {
  return del([paths.tmp]);
});

gulp.task('clean:dist', function() {
  return del([paths.dist]);
});

/**
 * Watch
 */
// gulp.task('watch', function () {
//   gulp.watch(paths.scripts, ['build:concat']);
//   gulp.watch(paths.templates, ['build:concat']);
// });

/**
 * Default
 */
gulp.task('default', ['dist']);
