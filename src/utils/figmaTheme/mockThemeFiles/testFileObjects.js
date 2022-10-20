import globalTheme from './base.json';
import spacingTheme from './spacing.json';
import theme1 from './theme1.json';
import theme2 from './theme2.json';

export const themeJson = [
  {
    name: 'theme1',
    selectedTokenSets: {
      global: 'enabled',
      theme1: 'enabled',
      theme2: 'disabled',
    },
  },
  {
    name: 'theme2',
    selectedTokenSets: {
      global: 'enabled',
      theme1: 'disabled',
      theme2: 'enabled',
    },
  },
];

export const sourceThemeJson = [
  {
    name: 'theme1',
    selectedTokenSets: {
      global: 'source',
      theme1: 'enabled',
      theme2: 'disabled',
    },
  },
  {
    name: 'theme2',
    selectedTokenSets: {
      global: 'source',
      theme1: 'disabled',
      theme2: 'enabled',
    },
  },
];

export const nestedThemeJson = [
  {
    name: 'theme1',
    selectedTokenSets: {
      'global/global': 'enabled',
      'global/spacing': 'enabled',
      theme1: 'enabled',
      theme2: 'disabled',
    },
  },
  {
    name: 'theme2',
    selectedTokenSets: {
      'global/global': 'enabled',
      'global/spacing': 'enabled',
      theme1: 'disabled',
      theme2: 'enabled',
    },
  },
];

export const correctFiles = {
  '$metadata.json': {
    tokenSetOrder: ['global', 'theme1', 'theme2'],
  },
  '$theme.json': themeJson,
  'global.json': globalTheme,
  'theme1.json': theme1,
  'theme2.json': theme2,
};

export const correctSourceFiles = {
  '$metadata.json': {
    tokenSetOrder: ['global', 'theme1', 'theme2'],
  },
  '$theme.json': sourceThemeJson,
  'global.json': globalTheme,
  'theme1.json': theme1,
  'theme2.json': theme2,
};

export const correctNestedFiles = {
  '$metadata.json': {
    tokenSetOrder: ['global/global', 'global/spacing', 'theme1', 'theme2'],
  },
  '$theme.json': nestedThemeJson,
  'global/global.json': globalTheme,
  'global/spacing.json': spacingTheme,
  'theme1.json': theme1,
  'theme2.json': theme2,
};

export const brokenFilesNoMeta = {
  '$theme.json': themeJson,
  'global.json': globalTheme,
  'theme1.json': theme1,
  'theme2.json': theme2,
};

export const brokenFilesNoTheme = {
  '$metadata.json': {
    tokenSetOrder: ['global', 'theme1', 'theme2'],
  },
  'global.json': globalTheme,
  'theme1.json': theme1,
  'theme2.json': theme2,
};

export const brokenFilesIncorectTokens = {
  '$metadata.json': {
    tokenSetOrder: ['global', 'theme1', 'theme2'],
  },
  '$theme.json': [
    ...themeJson,
    {
      name: 'theme4',
      selectedTokenSets: {
        global: 'disabled',
        theme1: 'disabled',
        theme2: 'disabled',
        theme3: 'disabled',
        theme4: 'disabled',
      },
    },
  ],
  'global.json': globalTheme,
  'theme1.json': theme1,
  'theme2.json': theme2,
};
