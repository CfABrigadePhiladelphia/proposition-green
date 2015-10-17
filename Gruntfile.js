module.exports = function(grunt) {
  var config = {};
  config.pkg = grunt.file.readJSON('package.json');

  /**
   * Paths
   */
  config.path = {
    // Code
    src: 'app',
    src_scripts: '<%= path.src %>/javascript',
    src_images: '<%= path.src %>/images',
    src_styles: '<%= path.src %>/css',

    // External Code
    vendor: 'vendor',
    vendor_scripts: '<%= path.vendor %>/javascript',
    vendor_styles: '<%= path.vendor %>/css',
    vendor_fonts: '<%= path.vendor %>/fonts',

    // Dev Server
    public: 'public',
    public_scripts: '<%= path.public %>/javascript',
    public_styles: '<%= path.public %>/css',
    public_images: '<%= path.public %>/images',
    public_fonts: '<%= path.public %>/fonts'
  };


  /**
   * Custom Configs
   */

  // NGConstant
  grunt.loadNpmTasks('grunt-ng-constant');
  config.ngconstant = {
    options: {
      name: 'mcData.config',
      dest: '<%= path.build_scripts %>/config.js'
    }
  };

  // Shell
  grunt.loadNpmTasks('grunt-shell');
  config.shell = {
    options: {
      failOnError: true
    }
  };


  /**
   * Custom Services
   */

  // Express Server
  grunt.loadNpmTasks('grunt-express-server');
  config.express = {
    options: {
      script: 'scripts/server.js',
      background: false
    },
    dev: {
    }
  };

  // Watches
  grunt.loadNpmTasks('grunt-contrib-watch');
  config.watch = {
    // App CoffeeScript
    coffee: {
      files: ['<%= path.src_scripts %>/*.coffee', '<%= path.src_scripts %>/**/*.coffee'],
      tasks: ['build:coffee', 'install']
    },

    // App JavaScript
    js: {
      files: ['<%= path.src_scripts %>/**.js', '<%= path.src_scripts %>/**/*.js', '<%= path.vendor_scripts %>/**.js', '<%= path.vendor_scripts %>/*.js'],
      tasks: ['build:js', 'install']
    },

    // Config JavaScript
    config: {
      files: ['Gruntfile.js', 'scripts/*.js'],
      tasks: ['jshint', 'install']
    },

    // Styles
    styles: {
      files: ['<%= path.vendor_styles %>/*.css', '<%= path.src_styles %>/*.css'],
      tasks: ['build:styles']
    },

    // HTML
    html: {
      files: ['<%= path.src %>/index.html', '<%= path.src_scripts %>/**/*.html'],
      tasks: ['build:html', 'install']
    },

    // Images
    images: {
      files: ['<%= path.src_images %>/**/*.png'],
      tasks: ['copy:images', 'install']
    }
  };


  /**
   * Hints
   */
  grunt.loadNpmTasks('grunt-coffeelint');
  config.coffeelint = {
    app: ['<%= path.src_scripts %>/*.coffee', '<%= path.src_scripts %>/**.coffee', '<%= path.src_scripts %>/*.coffee', '<%= path.src_scripts %>/**.coffee']
  };

  grunt.loadNpmTasks('grunt-contrib-jshint');
  config.jshint = {
    all: [
      'Gruntfile.js', 'app/*.js', 'app/**/*.js', 'scripts/*.js',
      'scripts/**/.js'
    ]
  };


  /**
   * Copy
   */
  grunt.loadNpmTasks('grunt-contrib-copy');
  config.copy = {};

  // HTML
  config.copy.html = {
    files: [{
      expand: true,
      cwd: '<%= path.src %>',
      src: ['*.html'],
      dest: '<%= path.public %>'
    }]
  };

  // Templates
  config.copy.templates = {
    files: [{
      expand: true,
      cwd: '<%= path.src_scripts %>',
      src: ['**/*.html'],
      dest: '<%= path.public_scripts %>'
    }]
  };

  // Styles
  config.copy.src_styles = {
    files: [{
      expand: true,
      cwd: '<%= path.src_styles %>',
      src: ['*.css'],
      dest: '<%= path.public_styles %>'
    }]
  };

  config.copy.vendor_styles = {
    files: [{
      expand: true,
      cwd: '<%= path.vendor_styles %>',
      src: ['*.css', '*.map'],
      dest: '<%= path.public_styles %>'
    }]
  };

  // Images
  config.copy.images = {
    files: [{
      expand: true,
      cwd: '<%= path.src_images %>',
      src: ['*.png'],
      dest: '<%= path.public_images %>'
    }]
  };

  // Fonts
  config.copy.vendor_fonts = {
    files: [{
      expand: true,
      cwd: '<%= path.vendor_fonts %>',
      src: ['*.eot', '*.svg', '*.ttf', '*.woff', '*.woff2'],
      dest: '<%= path.public_fonts %>'
    }]
  };

  // JavaScript
  config.copy.js = {
    files: [{
      expand: true,
      cwd: '<%= path.src_scripts %>',
      src: ['*.js', '**.js', '**/*.js'],
      dest: '<%= path.public_scripts %>'
    }]
  };

  config.copy.vendor_js = {
    files: [{
      expand: true,
      cwd: '<%= path.vendor_scripts %>',
      src: ['*.js', '**.js'],
      dest: '<%= path.public_scripts %>'
    }]
  };


  /**
   * Build
   */

  // CoffeeScript
  grunt.loadNpmTasks('grunt-contrib-coffee');
  config.coffee = {
    compile: {
      expand: true,
      cwd: '<%= path.src_scripts %>',
      src: ['*.coffee', '**.coffee', '**/*.coffee'],
      dest: '<%= path.public_scripts %>',
      ext: '.js'
    }
  };


  /*
   * Install
   */

  // Install Task
  config.copy.public = {
    files: [{
      expand: true,
      cwd: '<%= path.public %>',
      src: ['**'],
      dest: '<%= path.public %>'
    }]
  };

  grunt.registerTask('install', ['copy:public']);

  /*
   * Clean
   */
  grunt.loadNpmTasks('grunt-contrib-clean');
  config.clean = {
    public: {
      force: true,
      src: '<%= path.public %>/*'
    }
  };


  /**
   * Task Config
   */

  // Service Aliases
  grunt.registerTask('server', ['express']);

  // Build
  grunt.registerTask('build', ['build:html', 'build:images', 'build:fonts', 'build:styles', 'build:scripts']);
  grunt.registerTask('build:html', ['copy:html', 'copy:templates']);
  grunt.registerTask('build:images', ['copy:images']);
  grunt.registerTask('build:fonts', ['copy:vendor_fonts']);
  grunt.registerTask('build:styles', ['copy:src_styles', 'copy:vendor_styles']);
  grunt.registerTask('build:coffee', ['coffeelint', 'coffee', 'copy:js']);
  grunt.registerTask('build:js', ['jshint', 'copy:js', 'copy:vendor_js', 'ngconstant']);
  grunt.registerTask('build:scripts', ['build:coffee', 'build:js']);

  grunt.registerTask('default', ['build', 'install']);


  /**
   * Running Grunt
   */
  grunt.initConfig(config);
};
