import '!style-loader!css-loader!sass-loader!../src/assets/scss/main.scss';
import '../src/assets/css/main.css';

import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/components/store';
import {
  flattenObjectToCssVars,
  parseBrandingJson,
} from '@/utils/parseBrandingJson';
import { injectThemeCssVariables } from '@/utils/injectThemeCssVariables';
import { getTheme } from './utils/getTheme';
import { getThemeNames } from './utils/getThemeNames';
import { ThemeBar } from './themeBar';
import './theme-bar.scss';

const isExternal = process.env.STORYBOOK_THEME_LOCATION === 'external';
const isFigma = process.env.STORYBOOK_THEME_LOCATION === 'figma';

const getThemeFiles = () => {
  const localFiles = require.context('../src/theme/', true, /theme\.json$/i);
  if (!isExternal) {
    return localFiles;
  }
  try {
    const { getFiles } = require('@/utils/themeFileLocation');
    return getFiles();
  } catch (e) {
    alert(
      "Could not load themeFileLocation.js. Make sure you've copied the file. Check the readme.md for more information. Using default theme instead."
    );
    console.error(
      "Could not load themeFileLocation.js. Make sure you've copied the file. Check the readme.md for more information. Using default theme instead."
    );
    return localFiles;
  }
};

Vue.use(Vuex);
Vue.prototype.$store = store;

export const withTheme = story => {
  return {
    components: { story, ThemeBar },
    template:
      isExternal || isFigma
        ? '<ThemeBar :theme="theme" :theme-names="themeNames" @input="val => theme = val.target.value" :color="color"><story /></ThemeBar>'
        : '<story />',
    data() {
      return {
        color: 'black',
        themeObject: {},
        themeNames: ['base'],
        theme: 'base',
      };
    },
    async created() {
      if (isFigma) {
        try {
          const res = await fetch(
            `${process.env.STORYBOOK_THEME_URL}/themes.json`
          );
          const themesJson = await res.json();
          this.themeNames = themesJson.themes;
        } catch (e) {
          console.error('cant find theme names', e);
        }
      }
      if (isExternal) {
        const files = getThemeFiles();
        this.themeNames = getThemeNames(files);
      }
    },
    watch: {
      theme: {
        async handler(val) {
          if (isFigma) {
            const loadFigmaTheme = async () => {
              const res = await fetch(
                `${process.env.STORYBOOK_THEME_URL}/${val}.json`
              );
              const parsedTheme = await res.json();
              this.color = parsedTheme?.theme?.primary?.default;
              injectThemeCssVariables(flattenObjectToCssVars(parsedTheme));
              store.dispatch('theme/setTheme', parsedTheme);
            };

            loadFigmaTheme();
            return;
          }
          try {
            const files = getThemeFiles();
            const json = await getTheme(files, isExternal ? val : '');
            const loadedTheme = parseBrandingJson(json);
            injectThemeCssVariables(flattenObjectToCssVars(loadedTheme));
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
  layout: isFigma || isExternal ? 'fullscreen' : 'padded',
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

export const decorators = [withTheme];
