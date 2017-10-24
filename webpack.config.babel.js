const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/app.js')
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    hot: true,
    contentBase: 'public',
    port: 3000,
    inline: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          // 'react-hot-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        loader: [
          // 'react-hot-loader',
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        loader: [
          // 'react-hot-loader',
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }

}