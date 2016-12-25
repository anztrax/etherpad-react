module.exports = {
  entry: './index.js',
  output: {
    path : 'public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },
  plugin : process.env.NODE_ENV === 'production' ?
    [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ] : [],
};