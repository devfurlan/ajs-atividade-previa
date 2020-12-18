const gulp = require('gulp'),
      clean = require('gulp-clean'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cssnano = require('gulp-cssnano'),
      include = require('gulp-file-include'),
      htmlmin = require('gulp-htmlmin'),
      imagemin = require('gulp-imagemin'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload;


// Delete folder 'dist'
gulp.task('clean', function() {
  return gulp.src('./dist/', { read: false, allowEmpty: true })
    .pipe(clean())
    .pipe(gulp.dest('./dist'));
});


// Copy webfonts Font Awesome
gulp.task('fa', async function() {
  return gulp.src(['./node_modules/@fortawesome/fontawesome-free/webfonts/**/*'])
      .pipe(gulp.dest('./src/assets/webfonts/font-awesome'));
});

// Copy files folder 'src' to 'dist', after delete folder 'dist'
gulp.task('copy', async function() {
  // Copy vendors
  return gulp.src(['./src/assets/**/*'], {"base": "./src"})
      .pipe(gulp.dest('./dist/'));
});


// Compile, clean and minify files SCSS/CSS
sass.compiler = require('node-sass');

gulp.task('sass', function() {
  // Clean css folder
  gulp.src('./dist/css/', { read: false, allowEmpty: true })
    .pipe(clean())

  return gulp
    .src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/css/'));
});


// Minify files HTML
gulp.task('html', async function() {
  // Clean HTML files
  // gulp.src('./dist/**/*.html', { read: false, allowEmpty: true })
  //     .pipe(clean())

  return gulp.src(['./src/**/*.html', '!./src/include/**/*', '!./src/vendors/**/*'])
    .pipe(include())
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});


// Compile, clean and minify files JS
gulp.task('js', function(){
  // Clean js folder
  // gulp.src('./dist/js/', { read: false, allowEmpty: true })
  //   .pipe(clean())

  return gulp.src('./src/js/**/*.js')
    .pipe(babel({
      minified: true,
      comments: false,
      presets: ['@babel/env']
    }))
    .pipe(concat('script.min.js'))
    // .on('error', function (err) { console.log(err) })
    .pipe(gulp.dest('./dist/js/'))
})


// Minify images
gulp.task('images', function(){
  // Clean img folder
  // gulp.src('./dist/img/', { read: false, allowEmpty: true })
  //     .pipe(clean())

  return gulp.src('./src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'))
})


// Define the default task
gulp.task('default', gulp.series('clean', 'fa', 'copy', 'sass', 'js', 'images', 'html'));
// gulp.task('default', gulp.series('sass', 'html', 'js', 'images'));


// Reload server
function reloadServer(done) {
  reload();
  done();
}


// Run server
gulp.task('server', function() {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
  gulp.watch('./dist/**/*', gulp.series(reloadServer));
  // gulp.watch('./dist/**/*').on('change', reload);
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass'));
  gulp.watch('./src/**/*.html', gulp.series('html'));
  gulp.watch('./src/js/**/*.js', gulp.series('js'));
  gulp.watch('./src/img/**/*', gulp.series('images'));
});

exports.reloadServer = reloadServer;