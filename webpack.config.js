const path = require('path')

const config = {
  entry: {
    'holy-editor-plugin-cards': './index.js'
  },
  output: {
    path: path.resolve(__dirname, './'),
    filename: '[name].js',
    publicPath: '/',
    library: 'holyEditorPluginCards',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: require.resolve('deku/lib/element'),
        use: [{
          loader: 'expose-loader',
          options: 'dekuElement'
        }]
      },
      {
        test: require.resolve('deku/lib/app'),
        use: [{
          loader: 'expose-loader',
          options: 'dekuApp'
        }]
      },
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=25000'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'to-string-loader',
          'css-loader',
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(jpeg|png|gif|jpg|svg|eot|ttf|woff|woff2)$/i,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'utils': path.resolve(__dirname, 'src/utils/')
    }
  },
  cache: false,
  watch: false,
  devtool: 'source-map'
}

module.exports = config
