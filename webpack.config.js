const Webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  target: 'node',
  output: {
    path: './lib',
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'aws-sdk': 'aws-sdk'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'stage-0',
            'latest'
          ],
          plugins: [
            'transform-promise-to-bluebird',
            ['transform-async-to-module-method', {
              module: 'bluebird',
              method: 'coroutine'
            }],
            'transform-runtime'
          ],
          cacheDirectory: true
        },
        exclude: [/node_modules/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new Webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: {
        comments: false
      },
      mangle: false
    })
  ]
}
