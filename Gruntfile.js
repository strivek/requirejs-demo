/*
 * 不同livereload端口设置
 * connect livereload端口设置不同的值
 * watch 下的livrereload 与其一一对应
 *
 */
module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);//自动加载grunt任务
    //初始化配置
    grunt.initConfig({
        //grunt-contrib-watch配置
        watch: {
            //demo为定义监测任务的名字
            demo: { 
                files: ['web/*.*'],
                options: {
                    livereload: 5000
                }
            },
            dev: {
                files: ['web1/*.*'],
                options: {
                    livereload: 3030
                }
            }
        },
        //grunt-contrib-connect配置
        connect: {
            demo: {
                options: {
                    base: "web",
                    port: 1111,
                    hostname: '*',
                    livereload: 5000,
                    open: {
                        target: 'http://127.0.0.1:1111'
                    }
                }
            },
            dev: {
                options: {
                    base: "web1",
                    port: 2222,
                    hostname: '*',
                    livereload: 3030,
                    open: {
                        target: 'http://127.0.0.1:2222'
                    }
                }
            }
        }
    });
    grunt.registerTask('dev', ['connect:dev', 'watch:dev']);//注册任务到grunt
};
