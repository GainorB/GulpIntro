// WHERE WE DESCRIBE OUR TASKS

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to the files to use
  gulp.dest - Points to the folder to output
  gulp.watch - Watch files and folders for changes
*/

// LOGS MESSAGE
// FIRST PARAM IS THE NAME OF THE TASK, THEN A CALL BACK DEFINING THE TASK
gulp.task('message', () => {
  return console.log('Gulp is running...');
});

// IF YOU DON'T WANT TO SPECIFY A TASK AT THE COMMAND LINE 'gulp message'
// gulp.task('default', ['message']);
gulp.task('default', ['copyHTML', 'imageMin', 'sass', 'scripts']);

// COPY HTML FILES
gulp.task('copyHTML', () => {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

// OPTIMIZE IMAGES
gulp.task('imageMin', () =>
  gulp.src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'))
);

// MINIFY JS
gulp.task('minify', () => {
  gulp.src('./src/js/*.js').pipe(uglify()).pipe(gulp.dest('dist/js'));
});

// COMPILE SASS
gulp.task('sass', () => {
  gulp
    .src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

// SCRIPTS
// TAKE JS FILES AND COMBINE IT INTO A FILE CALLED MAIN.JS
gulp.task('scripts', () => {
  gulp
    .src('./src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

// CONSTANTLY WATCH INSTEAD OF HAVING TO RUN GULP
gulp.task('watch', () => {
  // WATCH TAKES 2 PARAMS: LOCATION TO WATCH/FILE TYPE, NAME OF THE TASK
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHTML']);
});
