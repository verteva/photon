// import '!style-loader!css-loader!sass-loader!../src/assets/scss/main.scss';
import '../src/assets/css/main.css';

import Vuex from 'vuex';
import Vue from 'vue';
import store from '../src/components/store';
import { flattenObjectToCssVars, parseBrandingJson } from "../src/utils/parseBrandingJson";
import { injectThemeCssVariables } from "../src/utils/injectThemeCssVariables";

const getThemeLocation = () => {
  try {
    return require('../themeLocation')
  }
  catch (e) {
    alert('Could not load themeLocation.js. Make sure you\'ve copied the file. Check the readme.md for more information.')
    console.error('Could not load themeLocation.js. Make sure you\'ve copied the file. Check the readme.md for more information.');
    return {};
  }
}

const { getTheme } = getThemeLocation();

Vue.use(Vuex);
Vue.prototype.$store = store;

const theme = Vue.observable({ value: null });

export const withTheme = (story, context) => {
  theme.value = context.globals.theme;

  return {
    components: { story },
    template: '<story />',
    computed: {
      theme: () => theme.value,
    },
    watch: {
      theme: {
        handler: async (val) => {
          if (!getTheme) {
            return;
          }
          try {
            const json = await getTheme(val);
            const loadedTheme = parseBrandingJson(json);
            injectThemeCssVariables(flattenObjectToCssVars(loadedTheme));
          } catch (e) {
            console.error('Error: Unable to load and inject theme, errors:', e);
          }
        },
        immediate: true,
      },
    }
  };
}

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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'Nano',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'Nano', icon: 'circlehollow', title: 'NANO' },
        { value: 'amp', icon: 'circle', title: 'AMP' },
        { value: 'suncorp', icon: 'circle', title: 'SUNCORP' },
        { value: 'danbrand', icon: 'circle', title: 'danbrand' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export const decorators = [withTheme];
