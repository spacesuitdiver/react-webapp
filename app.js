'use strict';

require('babel/register')({});

var server = require('./server');

const PORT = process.env.PORT || 3000;

var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
global.webpackIsomorphicTools = new WebpackIsomorphicTools(require('./webpack/isomorphic-tools.config'))
.development(process.env.NODE_ENV !== 'production')
.server(__dirname, function() {
	server.listen(PORT, function () {
		console.log('Server listening on: ' + PORT);
	});
});
