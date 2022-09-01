const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules
    .push({
      test: /\.scss$/,
      use: [
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        require.resolve('sass-loader'),
      ],
      include: path.resolve(__dirname, '../'),
    });

  config.module.rules.push({
    test: /\.postcss$/,
    loaders: ['style-loader', 'css-loader', {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    }],
    include: path.resolve(__dirname, '../')
  });

  return config;
};
