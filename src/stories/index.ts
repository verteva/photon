import { Component } from 'vue';
import PButton from './Button';
import PSkipLink from './SkipLink';
import PAccordion from './Accordion';
// import PAutocomplete from './Button.vue';

export interface PhotonComponents {
  [key: string]: Component
}

const components: PhotonComponents = {
  PButton,
  PSkipLink,
  PAccordion,
};

export type PhotonComponentKeys = keyof PhotonComponents

export default components