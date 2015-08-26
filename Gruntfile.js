module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      build: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'build/css/',
        ext: '.min.css'
      }
    },
    replace: {
      build: {
        src: ['build/index.html'],
        overwrite: true,
        replacements: [{
          from: '<script src="//localhost:35729/livereload.js"></script>',
          to: ''
        }, {
          from: '<link rel="stylesheet" href="css/style.css" />',
          to: '<link rel="stylesheet" href="css/style.min.css" />'
        }]
      }
    },
    copy: {
      build: {
        src: ['index.html','app.yaml', 'main.py', 'img/*'],
        dest: 'build/'
      },
      prod: {
        expand: true,
        cwd: 'build/',
        src: ['**/*'],
        dest: '../alle-prod/surfwax/'
      }
    },
    clean: {
      build: {
        src: ['build/']
      },
      prod: {
        options: {
          force: true
        },
        src: ['../alle-prod/']
      }
    },
    watch: {
      all: {
        files: ['index.html','css/*'],
        options: {
          livereload: true
        }
      },
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Load live reload
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('cleanb', ['clean:build']);
  grunt.registerTask('cleanp', ['clean:prod']);
  grunt.registerTask('build', ['clean:build','copy:build','cssmin:build','replace:build']);
  grunt.registerTask('prod', ['clean:build','copy:build','cssmin:build','replace:build','clean:prod','copy:prod']);
  grunt.registerTask('simple', ['clean:prod','copy:prod']);
  grunt.registerTask('liver', ['watch']);
};