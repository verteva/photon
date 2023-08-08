import { create } from '@storybook/theming';

export const dark = create({
  base: 'dark',
  brandTitle: 'Nano Component Library',
  brandUrl: 'https://nanolendingsolutions.com',
  brandImage: '',
  appBg: '#222222',
  appContentBg: '#333333',
});

export const light = create({
  base: 'light',
  brandTitle: 'Nano Component Library',
  brandUrl: 'https://nanolendingsolutions.com',
  brandImage: '',
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#3f3f3f',
  appBorderRadius: 4,
});
