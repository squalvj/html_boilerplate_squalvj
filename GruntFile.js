module.exports = function(grunt) {
var opt = ['assets/js/*.js', 'assets/css/*.css'];
  // Project configuration.
   grunt.initConfig({
    injector: {
      options: {
        min:'true'
      },
      local_dependencies: {
        files: {
          'index.html': opt,
        }
      }
    }
  })

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-injector');

  // Default task(s).
  grunt.registerTask('default', ['injector']);

};