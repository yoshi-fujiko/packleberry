module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    compass:
      pc:
        options:
          config: 'config_pc.rb'

      sp:
        options:
          config: 'config_sp.rb'

      dev_pc:
        options:
          config: 'config_pc_develop.rb'

      dev_sp:
        options:
          config: 'config_sp_develop.rb'

    uglify:
      build_pc:
        files: 'pc/pub/js/dev.min.js': ['pc/pub/js/dev.js']

      build_sp:
        files: 'sp/pub/js/dev.min.js': ['sp/pub/js/dev.js']

    watch:
      css_pc:
        files: ['pc/sass/**/*.scss']
        tasks: ['compass:pc']
        options:
          atBegin: true
          spawn: false

      css_sp:
        files: ['sp/sass/**/*.scss']
        tasks: ['compass:sp']
        options:
          atBegin: true
          spawn: false
  })

  grunt.loadNpmTasks('grunt-contrib-compass')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-uglify')

  grunt.registerTask('default', ['compass'])
  grunt.registerTask('pc', ['compass:pc'])
  grunt.registerTask('sp', ['compass:sp'])
  grunt.registerTask('pc-dev', ['compass:dev_pc'])
  grunt.registerTask('sp-dev', ['compass:dev_sp'])
  grunt.registerTask('watch-pc', ['watch:css_pc'])
  grunt.registerTask('watch-sp', ['watch:css_sp'])


