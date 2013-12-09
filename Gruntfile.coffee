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

      pc_dev:
        options:
          config: 'config_pc_develop.rb'

      sp_dev:
        options:
          config: 'config_sp_develop.rb'

  })

  grunt.loadNpmTasks('grunt-contrib-compass')

  grunt.registerTask('default', ['compass'])
  grunt.registerTask('pc', ['compass:pc'])
  grunt.registerTask('sp', ['compass:sp'])
  grunt.registerTask('pc-dev', ['compass:pc_dev'])
  grunt.registerTask('sp-dev', ['compass:sp_dev'])

