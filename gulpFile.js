// npm i gulp gulp-rename gulp-terser gulp-clean-css -D

var gulp = require("gulp"),
    rename = require("gulp-rename"),
    terser = require("gulp-terser");

function minifyJS() {
  return gulp.src("./AjaxFormSubmit.js")
    .pipe(rename("AjaxFormSubmit.min.js"))
    .pipe(terser())
    .pipe(gulp.dest("./"));
}

exports.default = gulp.parallel(minifyJS);