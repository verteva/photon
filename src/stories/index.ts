import { Component } from 'vue';
import PIcon from './Icon';
import PButton from './Button';
import PSkipLink from './SkipLink';
import PAccordion from './Accordion';
import PInput from './Input';
import PLabel from './Label';
import PInputText from './InputText';

export interface PhotonComponents {
  [key: string]: Component
}

const components: PhotonComponents = {
  PButton,
  PSkipLink,
  PAccordion,
  PIcon,
  PInputText,
  PInput,
  PLabel,
};

export type PhotonComponentKeys = keyof PhotonComponents

export default components