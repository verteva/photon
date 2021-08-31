import { Component } from 'vue';
import PIcon from './Icon';
import PButton from './Button';
import PSkipLink from './SkipLink';
import PAccordion from './Accordion';
import PInput from './Input';
import PLabel from './Label';
import PInputText from './InputText';
import PAutoComplete from './Autocomplete';
import PDialog from './Dialog';

export interface PhotonComponents {
  [key: string]: Component
}

const components: PhotonComponents = {
  PButton,
  PSkipLink,
  PAccordion,
  PAutoComplete,
  PIcon,
  PInputText,
  PInput,
  PLabel,
  PDialog,
};

export type PhotonComponentKeys = keyof PhotonComponents

export default components