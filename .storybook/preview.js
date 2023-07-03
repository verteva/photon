import '!style-loader!css-loader!sass-loader!../src/assets/scss/main.scss';
import '../src/assets/css/main.css';

import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/components/store';
import externalStore from '@/components v2/store';
import {
  flattenObjectToCssVars,
  parseBrandingJson,
} from '@/utils/parseBrandingJson';
import { injectThemeCssVariables } from '@/utils/injectThemeCssVariables';
import { getTheme } from './utils/getTheme';
import { getThemeNames } from './utils/getThemeNames';
import { ThemeBar } from './themeBar';
import '@/utils/fontAwesome/setup';
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
Vue.prototype.$store = isExternal ? externalStore : store;

export const withTheme = (story) => {
  return {
    components: { story, ThemeBar },
    template:
      isExternal || isFigma
        ? '<ThemeBar :theme="theme" :theme-names="themeNames" @input="setThemeName" :color="color"><story /></ThemeBar>'
        : '<story />',
    data() {
      return {
        color: 'black',
        themeObject: {},
        themeNames: ['Nano'],
        theme: 'Nano',
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
        if (store._modules.root._children.theme.state.themeName) {
          this.theme = store._modules.root._children.theme.state.themeName;
        }
      }
    },
    methods: {
      setThemeName(themeName) {
        this.theme = themeName.target.value;
        store.dispatch('theme/setThemeName', themeName.target.value);
      },
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
            this.color = loadedTheme?.theme?.primary?.default;
            injectThemeCssVariables(flattenObjectToCssVars(loadedTheme));
            store.dispatch('theme/setTheme', loadedTheme);
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
      order: [
        'About PHOTON',
        'Documentation',
        'v2',
        ['About PHOTON v2', 'Atoms', 'Molecules'],
        'Global',
        'Button & Tags',
        'Forms',
        'Components',
      ],
    },
  },
};

export const decorators = [withTheme];
