var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
 
gulp.task('contact-button', function () {
  gulp.src('img/contact-buttons/*.png')
    .pipe(imageResize({ 
      width : 40,
      height : 40,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('photos', function () {
  gulp.src('img/photos/*.{jpg,png}')
    .pipe(imageResize({ 
      width : 300,
      height : 300,
      crop : false,
      upscale : false
    }))
    .pipe(gulp.dest('dist'));
});


gulp.task('default', function () {
  	gulp.run('contact-button', 'dist');
	gulp.run('photos', 'dist');

});

