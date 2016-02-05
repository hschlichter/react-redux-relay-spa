var getBabelRelayPlugin = require('babel-relay-plugin');
var request = require('sync-request');
var introspectionQuery = require('graphql/utilities').introspectionQuery

var response = request('GET', 'http://localhost:3000/graphql', {
	qs: {
		query: introspectionQuery
	}
});

var schema = JSON.parse(response.body.toString('utf-8'));

module.exports = getBabelRelayPlugin(schema.data, {
	abortOnError: true
});

