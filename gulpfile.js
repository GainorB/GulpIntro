// WHERE WE DESCRIBE OUR TASKS

const gulp = require('gulp');

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task - Define tasks
  gulp.src - Point to the files to use
  gulp.dest - Points to the folder to output
  gulp.watch - Watch files and folders for changes
*/

// LOGS MESSAGE
// FIRST PARAM IS THE NAME OF THE TASK, THEN A CALL BACK DEFINING THE TASK
gulp.task('message', function() {
  return console.log('Gulp is running...');
});
