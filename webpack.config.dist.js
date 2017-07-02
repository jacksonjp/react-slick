var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/index',

  output: {
    library: 'Slider',
    libraryTarget: 'umd',
    path: path.join(__dirname, 'dist')
  },

  module: {
    rules: [
      {test: /\.jsx$/, loader: require.resolve('babel-loader')},
      {test: /\.js$/, loader: require.resolve('babel-loader'), exclude: /node_modules/}
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],

  node: {
    Buffer: false
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
