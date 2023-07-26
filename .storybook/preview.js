import '!style-loader!css-loader!sass-loader!../src/assets/scss/main.scss';
import '../src/assets/css/main.css';

import Vuex from 'vuex';
import Vue from 'vue';
import store from '@/components/store';
//import externalStore from '@/components v2/store';
import { injectThemeCSSVariablesFromFile } from '@/utils/injectThemeCssVariables';
import { ThemeBar } from './themeBar';
import '@/utils/fontAwesome/setup';
import './theme-bar.scss';

Vue.use(Vuex);
Vue.prototype.$store = store;

export const withTheme = (story) => {
  return {
    components: { story, ThemeBar },
    template:
      '<ThemeBar :theme="theme" :theme-names="themeNames" @input="setThemeName" :color="color"><story /></ThemeBar>',
    data() {
      return {
        color: 'black',
        themeObject: {},
        themeNames: ['amp', 'demo'],
        theme: 'amp',
      };
    },
    async created() {},
    methods: {
      setThemeName(themeName) {
        this.theme = themeName.target.value;
        store.dispatch('theme/setThemeName', themeName.target.value);
      },
    },
    watch: {
      theme: {
        async handler(val) {
          // Load theme CSS variables
          injectThemeCSSVariablesFromFile(
            `/branding/${val}/tokens/css/variables-refs.css`
          );
        },
        immediate: true,
      },
    },
  };
};

export const parameters = {
  layout: 'fullscreen',
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
