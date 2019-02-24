const path = require('path')
const webpack = require('webpack')
const {WebpackPluginServe: Serve} = require('webpack-plugin-serve')

/** @type {webpack.Configuration} */
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    './index',
    'webpack-plugin-serve/client',
  ],
  resolve: {
    extensions: ['.wasm', '.mjs', '.tsx', '.tx', '.js', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/',
  },
  watch: true,
  plugins: [
    new webpack.NamedModulesPlugin(),
    new Serve({historyFallback: true, hmr: true}),
  ],
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',

            options: {
              gfm: false,
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        include: __dirname,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'raw-loader',
          },
        ],
        include: __dirname,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        ],
        include: path.join(__dirname, 'assets'),
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/png',
            },
          },
        ],
        include: path.join(__dirname, 'assets'),
      },
      {
        test: /\.gif$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/gif',
            },
          },
        ],
        include: path.join(__dirname, 'assets'),
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: 'url-loader',

            options: {
              mimetype: 'image/jpg',
            },
          },
        ],
        include: path.join(__dirname, 'assets'),
      },
    ],
  },
}
