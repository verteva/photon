import { create } from '@storybook/theming';

export const dark = create({
  base: 'dark',
  brandTitle: 'Nano Component Library',
  brandUrl: 'https://nano.com.au',
  brandImage: 'https://dev-apply.verteva.com.au/images/Nano_ChatProfile.png',
  appBg: '#222222',
  appContentBg: '#333333',
});

export const light = create({
  base: 'light',
  brandTitle: 'Nano Component Library',
  brandUrl: 'https://nano.com.au',
  brandImage: 'https://dev-apply.verteva.com.au/images/Nano_ChatProfile.png',
  appBg: '#ffffff',
  appContentBg: '#efefef',

  // UI
  appBg: '#ffffff',
  appContentBg: '#efefef',
  appBorderColor: '#3f3f3f',
  appBorderRadius: 4,
})