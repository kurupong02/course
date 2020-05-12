// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: '@svgr/webpack',
            options: {
              babel: false,
              icon: true,
            },
          },
        ],
      },
    ],
  },
  //...
}
