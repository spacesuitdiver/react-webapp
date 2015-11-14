import path                 from 'path';
import webpack from 'webpack';
import WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';

var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./isomorphic-tools.config'));

module.exports = {
  devtool: 'inline-source-map',
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions:         ['', '.js', '.jsx']
  },
  entry:   [
    'webpack-hot-middleware/client',
    './client'
  ],
  output: {
    path:       path.join(__dirname, '../dist'),
    filename:   'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
    {
      test:    /\.jsx?$/,
      exclude: /node_modules/,
      loader:  'babel',
      query:   {
        stage:   0,
        plugins: ['react-transform'],
        extra:   {
          'react-transform': {
            transforms: [{
              transform: 'react-transform-hmr',
              imports:   ['react'],
              locals:    ['module']
            }]
          }
        }
      }
    },
    { test: /\.less$/, loader: "style!css!less" },
    { test: webpackIsomorphicToolsPlugin.regular_expression('images'), loader: 'url-loader?limit=10240' }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    webpackIsomorphicToolsPlugin.development()
  ],
}