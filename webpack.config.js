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

  plugins: [
    new HtmlwebpackPlugin({
      template: path.resolve(__dirname,'public','index.html')
    }),
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),

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
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel')
            ].filter(Boolean)
          }
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