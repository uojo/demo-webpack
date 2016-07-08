module.exports = function(grunt) {
	
	// 加载任务模块
	require("matchdep").filterAll("grunt-*").forEach(grunt.loadNpmTasks);
	
	var webpack = require("webpack");
	var webpackConfig = require("./webpack.config.js");
	grunt.initConfig({
		webpack: {
			"options": webpackConfig,
			"build-dev": {
				// devtool: "sourcemap",
				debug: true
			}
		},
		watch: {
			"client": {
				files: ["*.html","src/**"],
				tasks: ["webpack:build-dev"],
				options: {
					// false:提高速度，容易崩溃
					// spawn: false,
					// true:终止上一个进程，生成新的进程完成任务
					interrupt: true,
					
					livereload:true
				}
			}
		}
	});


	grunt.registerTask("blive", ["webpack:build-dev", "watch:client"]);
	
};
