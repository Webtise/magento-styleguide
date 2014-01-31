module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'skin/frontend/default/blank/css/styles.css': 'skin/frontend/default/blank/scss/styles.scss'     
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        src: ['skin/frontend/default/blank/css/styles.css'],
                        dest: 'assets/css/',
                        filter: 'isFile',
                        expand: true,
                        flatten: true
                    },
                    {
                        src: ['skin/frontend/default/blank/images/**/*'],
                        dest: 'assets/images/',
                        filter: 'isFile',
                        expand: true,
                        flatten: true
                    }
                ]
            }
        },
        sassdown: {
            styleguide: {
                options: {
                    assets: 'styleguide/assets/css/styles.css',
                    baseUrl: '/'
                },
                files: [{
                    expand: true,
                    cwd: 'skin/frontend/default/blank/scss/magento',
                    src: ['**/*.scss'],
                    dest: '.'
                }]
            }
        }
    });
    grunt.loadNpmTasks('sassdown');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['sass', 'copy', 'sassdown']);
};
