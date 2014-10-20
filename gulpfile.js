var gulp = require("gulp");
var concat = require('gulp-concat');
var del = require("del");
var ngHtml2Js = require("gulp-ng-html2js");


gulp.task('templates', ['clean'], function(cb) {
	return gulp.src("./template/*.tpl.html")
	    .pipe(ngHtml2Js({
	        moduleName: "mobile.famous.angular.templates",
	        prefix: "go-"
	    }))
	    .pipe(gulp.dest("./dist/templates"));
});

gulp.task('concat', ['templates'],function(cb) {
	return gulp.src(["./dist/templates/*.js", "index.js"])
	    .pipe(concat('mobile-famous-bootstrap.js'))
	    .pipe(gulp.dest("./dist"));
});

gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['./dist'], cb);
})

gulp.task('default', ['concat']);
