const path = require('path');
const { DefinePlugin, IgnorePlugin } = require('webpack');

const {
  STORYBOOK_THEME_LOCATION,
  STORYBOOK_BRANDING_PATH,
  NODE_ENV,
} = process.env;

const isBuild = NODE_ENV === 'production';

if (STORYBOOK_THEME_LOCATION === 'external' && !STORYBOOK_BRANDING_PATH) {
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
    ...(isBuild ? {} : { branding: STORYBOOK_BRANDING_PATH }),
    '@': path.resolve(__dirname, '../src'),
  };

  if (isBuild) {
    config.plugins.push(
      new IgnorePlugin(
        /^(\.\.\/src\/assets\/scss\/dev-fonts\.scss|@\/utils\/themeFileLocation)$/
      )
    );
  }

  config.plugins.push(
    new DefinePlugin({
      BRANDING_PATH: JSON.stringify(STORYBOOK_BRANDING_PATH),
      IS_BUILD: JSON.stringify(isBuild),
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
