var gulp = require('gulp'),
    gutil = require('gulp-util'),
    less = require('gulp-less-sourcemap'),
    connect = require('gulp-connect');


gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('less', function () {
  gulp.src("assets/less/main.less")
  .pipe(less({
          sourceMap: {
              sourceMapRootpath: 'assets/less' // Optional absolute or relative path to your LESS files
          }
      }))
    .pipe(gulp.dest("assets/css"))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
 gulp.watch("assets/less/**/*.less", ['less']);
});


gulp.task('default', ['less', 'webserver', 'watch'], function(){
    return gutil.log('Gulp is running bitch!');
});
