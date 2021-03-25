const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDevelopment ? 'development' : 'producttion',

  entry: path.resolve(__dirname,'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js','.jsx','.ts','.tsx']
  },

  devServer: {
    contentBase: path.resolve(__dirname,'public'),
    hot: true
  },

  devtool: isDevelopment ? 'eval-source-map' : 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        exclude: '/node_modules/',
        use: ['style-loader','css-loader','sass-loader']
      }
    ]
  }
}