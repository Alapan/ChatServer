const path = require('path');

const SRC_DIR = path.resolve(__dirname + '/client');

module.exports = {
  entry: {
    main: [
      SRC_DIR + '/index.js'
    ],
    vendor: [
      'jquery',
      'bootstrap'
    ]
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        presets: ['@babel/react', '@babel/env'],
        plugins: ['@babel/proposal-class-properties']
      }
    },{
      test: /\.scss$/,
      use: ['sass-loader', 'style-loader', 'css-loader']
    }]
  }
}
