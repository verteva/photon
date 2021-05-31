import { Component } from '@vue/runtime-core';
import PButton from './Button';
import PAutocomplete from './Button.vue';

export interface photonComponents {
  PButton: Component
  PAutocomplete: Component;
}

const components: photonComponents = {
  PButton,
  PAutocomplete
};

export default components