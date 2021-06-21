// import { Component } from '@vue/runtime-core';
import { ComponentOptions, Component } from 'vue';
import PButton from './Button';
// import PAutocomplete from './Button.vue';

export interface PhotonComponents {
  [key: string]: Component
}

// export type PhotonComponentKeys = {
//   [key in keyof PhotonComponents]?: PhotonComponents[key];
// }

const components: PhotonComponents = {
  PButton,
  // PAutocomplete
};

export type PhotonComponentKeys = keyof PhotonComponents

export default components