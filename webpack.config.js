const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: ['.js','.jsx','.ts','.tsx'],

  devServer: {
    contentBase: path.resolve(__dirname,'public'),
    hot: true
  },

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