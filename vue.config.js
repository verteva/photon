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
          use: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
            require.resolve('resolve-url-loader'),
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: true,
                sassOptions: {
                  data: '@import "./src/assets/scss/main.scss";',
                  prependData: '@import "./src/assets/scss/main.scss";',
                },
              },
            },
          ],
          include: path.resolve(__dirname, '../'),
        },
      ],
    },
  },
};
