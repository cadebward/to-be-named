const path = require('path')
console.log(__dirname)
module.exports = {

  entry: './src/index.js',

  output: {
    path: './src/build/',
    filename: 'bundle.js'
  },

  resolveLoader: {
    modulesDirectories: [path.join(__dirname, "node_modules")],
    root: path.join(__dirname, "node_modules")
  },

  resolve: {
    root: path.join(__dirname, "node_modules")
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          plugins: [path.resolve('node_modules/babel-plugin-transform-decorators-legacy')],
          presets: [
            path.resolve('node_modules/babel-preset-es2015'),
            path.resolve('node_modules/babel-preset-stage-1'),
            path.resolve('node_modules/babel-preset-react'),
          ],
        },
        exclude: [/node_modules\/(?!cadal)/],
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[local]_[hash:base64:3]',
        exclude: [/node_modules\/(?!cadal)/],
      },
    ],
  },

}
