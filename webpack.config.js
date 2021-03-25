const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  resolve: ['.js','.jsx','.ts','.tsx'],

  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}