var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, '../client')
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions:         ['', '.js', '.jsx']
  },
  output: {
    path:       path.join(__dirname, '../dist'),
    filename:   'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel'] },
      { test: /\.less$/, loader: "style!css!less" }
    ]
  },
};
