// import components, { photonComponents } from './stories'
import components, { PhotonComponentKeys } from './components';
import componentsV2, {
  PhotonComponentKeys as PhotonComponentKeysV2,
} from '@/components v2';
import { Component } from 'vue';
import {
  DefaultData,
  DefaultMethods,
  DefaultComputed,
  DefaultProps,
} from 'vue/types/options';

// Styles
import './assets/css/main.css';
import './assets/scss/main.scss';

// Custom Modules
import {
  parseBrandingJson,
  parseObject,
  flattenObjectToCssVars,
  replaceTemplateValue,
} from './utils/parseBrandingJson';
import {
  injectThemeCssVariables,
  injectThemeCSSVariablesFromFile,
} from './utils/injectThemeCssVariables';
import {
  getFigmaTheme,
  getFigmaThemeNames,
  parseFigmaJson,
  getBuiltThemeFiles,
} from './utils/figmaTheme';

// Stores
import * as toast from './components/Toast/store';
import * as toastV2 from './components v2/store/toast';

interface options {
  prefix?: string;
}

export default {
  install(
    Vue: {
      component: (
        arg0: string,
        arg1: Component<
          DefaultData<never>,
          DefaultMethods<never>,
          DefaultComputed,
          DefaultProps
        >
      ) => void;
    },
    options?: options // eslint-disable-line
  ): void {
    for (const key in components) {
      const _key: PhotonComponentKeys = key;
      Vue.component(key, components[_key]);
    }

    for (const key in componentsV2) {
      const _key: PhotonComponentKeysV2 = key;
      Vue.component(key, componentsV2[_key]);
    }
  },
  photonStores: {
    toast,
    toastV2,
  },
  Components: componentsV2,

  // Theme functions
  parseObject,
  parseBrandingJson,
  flattenObjectToCssVars,
  replaceTemplateValue,
  injectThemeCssVariables,
  injectThemeCSSVariablesFromFile,
  figmaTheme: {
    getFigmaTheme,
    getFigmaThemeNames,
    parseFigmaJson,
    getBuiltThemeFiles,
  },
};
