const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      require.resolve('sass-loader'),
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};