var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var entry = {
	main: [
		'./src/client.js'
	]
};

module.exports = [{
	context: __dirname,
	entry: entry,
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loaders: ['babel-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Relay Test',
			template: 'src/index.html',
			inject: 'body'
		})
	],
	resolve: {
		extensions: ['', '.js', '.jsx'],
		root: [__dirname],
		modulesDirectories: ['node_modules',  './']
	}
}];

