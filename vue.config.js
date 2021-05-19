import { join } from 'path';

export const configureWebpack = {
  output: {
    libraryExport: 'default',
  },
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
    },
  },
};
