var gulp = require("gulp");
var concat = require('gulp-concat');
var del = require("del");
var ngHtml2Js = require("gulp-ng-html2js");

var paths = {
	scripts : ["./dist/templates/*.js", "index.js"],
	templates: ["./template/*.tpl.html"]
}
gulp.task('templates', ['clean'], function(cb) {
	return gulp.src(paths.templates)
	    .pipe(ngHtml2Js({
	        moduleName: "mfab.templates",
	        prefix: "go-"
	    }))
	    .pipe(gulp.dest("./dist/templates"));
});

gulp.task('concat', ['templates'],function(cb) {
	return gulp.src(paths.scripts)
	    .pipe(concat('mfab.js'))
	    .pipe(gulp.dest("./dist"));
});

gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['./dist'], cb);
})

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['concat']);
  gulp.watch(paths.templates, ['concat']);  
});

gulp.task('default', ['concat']);
