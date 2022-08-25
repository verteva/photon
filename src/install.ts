// import components, { photonComponents } from './stories'
import components, { PhotonComponentKeys } from './components';
import { Component } from 'vue';
import {
  DefaultData,
  DefaultMethods,
  DefaultComputed,
  DefaultProps,
} from 'vue/types/options';
import './assets/scss/main.scss';
import {
  parseBrandingJson,
  parseObject,
  flattenObjectToCssVars,
  replaceTemplateValue,
} from './utils/parseBrandingJson';
import { injectThemeCssVariables } from './utils/injectThemeCssVariables';

import * as toast from './components/Toast/store';

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
  },
  photonStores: {
    toast,
  },
  parseObject,
  parseBrandingJson,
  flattenObjectToCssVars,
  replaceTemplateValue,
  injectThemeCssVariables,
};
