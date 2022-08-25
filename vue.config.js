/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default',
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
      },
    },
    module: {
      rules: [
        {
          test: /\.postcss$/,
          loaders: [
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
          include: path.resolve(__dirname, '../'),
        },
        {
          test: /\.scss$/,
          use: ['vue-style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
};
