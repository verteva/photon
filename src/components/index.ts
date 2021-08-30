import { Component } from 'vue';
import PIcon from './Icon';
import PButton from './Button';
import PSkipLink from './SkipLink';
import PAccordion from './Accordion';
import PInput from './Input';
import PLabel from './Label';
import PInputText from './InputText';
import PDialog from './Dialog';
import PInputSlider from './InputSlider';
import PCard from './Card';
import {
  PText,
  PH1,
  PH2,
  PH3,
} from './Typography';


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
  PDialog,
  PText,
  PH1,
  PH2,
  PH3,
  PInputSlider,
  PCard,
};

export type PhotonComponentKeys = keyof PhotonComponents

export default components