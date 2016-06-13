import webpack from 'webpack'

const config = {
  entry: './src',
  output: {
    path: 'release',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}

switch (process.env.NODE_ENV) {
  case 'production':
    config.plugins = [
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
    ]

    config.devtool = '#source-map'
    break

  default:
    config.devtool = 'inline-source-map'
}

export default config
