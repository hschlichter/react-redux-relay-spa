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
				loader: 'babel-loader',
				query: {
					plugins: ['./babelRelayPlugin']
				}
			},
			{
				test: /\.js$/,
				loader: "eslint-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Relay Test',
			template: 'src/index.html',
			inject: 'body'
		})
	]
}];

