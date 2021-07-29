import { Component } from 'vue';
import PIcon from './Icon';
import PButton from './Button';
import PSkipLink from './SkipLink';
import PAccordion from './Accordion';
import PInputText from './InputText.vue';

export interface PhotonComponents {
  [key: string]: Component
}

const components: PhotonComponents = {
  PButton,
  PSkipLink,
  PAccordion,
  PIcon,
  PInputText,
};

export type PhotonComponentKeys = keyof PhotonComponents

export default components