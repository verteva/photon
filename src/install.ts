// import components, { photonComponents } from './stories'
import components, { PhotonComponentKeys } from './stories'
import Vue, { Component } from 'vue';
import { DefaultData, DefaultMethods, DefaultComputed, DefaultProps } from 'vue/types/options';
import VueCompositionApi from '@vue/composition-api';
import './assets/css/main.css'

Vue.use(VueCompositionApi);

interface options {
  prefix?: string;
}

export default {
  install(Vue: { component: (arg0: string, arg1: Component<DefaultData<never>, DefaultMethods<never>, DefaultComputed, DefaultProps>) => void; }, options?: options): void {
    for (const key in components) {
      const _key: PhotonComponentKeys = key
      Vue.component(key, components[_key]);
    }
  }
}