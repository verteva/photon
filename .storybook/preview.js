// import '!style-loader!css-loader!sass-loader!../src/assets/scss/main.scss';
import '../src/assets/css/main.css';

import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/components/store';
import {
  flattenObjectToCssVars,
  // parseBrandingJson,
} from '@/utils/parseBrandingJson';
import { injectThemeCssVariables } from '@/utils/injectThemeCssVariables';
// import { getThemeNames } from './utils/getThemeNames';
// import { getTheme } from './utils/getTheme';
import {
  getChameleonTheme,
  getChameleonThemeNames,
} from './utils/getChameleonTheme';
import { parseBrandingJson as parseChameleonJson } from './utils/parseChameleonTheme';

const isExternal = process.env.STORYBOOK_THEME_LOCATION === 'external';

if (isExternal) {
  import('../src/assets/scss/dev-fonts.scss');
}

// const getThemeFiles = () => {
//   const localFiles = require.context('../src/theme/', true, /theme\.json$/i);
//   if (!isExternal) {
//     return localFiles;
//   }
//   try {
//     const { getFiles } = require('@/utils/themeFileLocation');
//     return getFiles();
//   } catch (e) {
//     alert(
//       "Could not load themeFileLocation.js. Make sure you've copied the file. Check the readme.md for more information. Using default theme instead."
//     );
//     console.error(
//       "Could not load themeFileLocation.js. Make sure you've copied the file. Check the readme.md for more information. Using default theme instead."
//     );
//     return localFiles;
//   }
// };

Vue.use(Vuex);
Vue.prototype.$store = store;

const theme = Vue.observable({ value: null });

export const withTheme = (story, context) => {
  theme.value = context.globals.theme;

  return {
    components: { story },
    template: '<story :theme="themeObject" />',
    data() {
      return {
        themeObject: {},
      };
    },
    computed: {
      theme: () => theme.value,
    },
    watch: {
      theme: {
        async handler(val) {
          const loadChameleonTheme = async () => {
            const chameleonFiles = require.context(
              '../src/photon-token-poc/',
              true,
              /\.json$/i
            );
            const chameleonTheme = await getChameleonTheme(
              chameleonFiles,
              val || 'Nano'
            );
            console.log(chameleonTheme);
            const parsedTheme = parseChameleonJson(chameleonTheme);
            console.log(parsedTheme);
            injectThemeCssVariables(
              flattenObjectToCssVars(parsedTheme, '--chameleon-')
            );
            store.dispatch('theme/setTheme', parsedTheme);
          };

          loadChameleonTheme();
          try {
            // const files = getThemeFiles();
            // const json = await getTheme(files, isExternal ? val : '');
            // const loadedTheme = parseBrandingJson(json);
            // injectThemeCssVariables(flattenObjectToCssVars(loadedTheme));
          } catch (e) {
            console.error('Error: Unable to load and inject theme, errors:', e);
          }
        },
        immediate: true,
      },
    },
  };
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['About PHOTON', 'Global', 'Button & Tags', 'Forms', 'Components'],
    },
  },
};

const chameleonThemeNameValues = getChameleonThemeNames(
  require.context('../src/photon-token-poc/', true, /\.json$/i)
).map(key => ({
  value: key,
  title: key,
  icon: 'circlehollow',
}));

export const globalTypes = {
  theme: true // isExternal
    ? {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'Nano',
        toolbar: {
          // The icon for the toolbar item
          icon: 'circlehollow',
          // Array of options
          items: chameleonThemeNameValues,
          // items: getThemeNames(getThemeFiles()).map(key => ({
          //   value: key,
          //   title: key,
          //   icon: 'circlehollow',
          // })),
          // Property that specifies if the name of the item will be displayed
          showName: true,
        },
      }
    : {},
};

export const decorators = [withTheme];
