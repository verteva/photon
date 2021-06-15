// import components, { photonComponents } from './stories'
import components, { PhotonComponentKeys } from './stories'
import { Component } from 'vue';
import { DefaultData, DefaultMethods, DefaultComputed, DefaultProps } from 'vue/types/options';

interface options {
  prefix?: string;
}

export default {
  install(Vue: { component: (arg0: string, arg1: Component<DefaultData<never>, DefaultMethods<never>, DefaultComputed, DefaultProps>) => void; }, options?: options): void {
    for (const key in components) {
      // const _key = options.prefix ? options.prefix + key : key
      console.log('KEY :::::', key);
      // const _key: string= key as keyof typeof components;
      // Vue.component(key, components[_key])
      // type keyType = keyof typeof components
      const _key: PhotonComponentKeys = key
      Vue.component(key, components[_key]);
    }
  }
}