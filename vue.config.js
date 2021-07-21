// eslint-disable-next-line @typescript-eslint/no-var-requires
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
  },
};
