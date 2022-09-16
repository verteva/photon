const path = require('path');
const { DefinePlugin } = require('webpack');

if (
  process.env.STORYBOOK_THEME_LOCATION === 'external' &&
  !process.env.STORYBOOK_BRANDING_PATH
) {
  console.error(
    'Can not load external themes without a branding path. Set your STORYBOOK_BRANDING_PATH in the .env variables'
  );
  process.exit(0);
}

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      require.resolve('style-loader'),
      require.resolve('css-loader'),
      require.resolve('resolve-url-loader'),
      {
        loader: require.resolve('sass-loader'),
        options: {
          sourceMap: true,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    branding: process.env.STORYBOOK_BRANDING_PATH,
    '@': path.resolve(__dirname, '../src'),
  };

  config.plugins.push(
    new DefinePlugin({
      BRANDING_PATH: JSON.stringify(process.env.STORYBOOK_BRANDING_PATH),
    })
  );

  config.module.rules.push({
    test: /\.postcss$/,
    loaders: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      },
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
