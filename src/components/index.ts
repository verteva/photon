import { Component } from 'vue';
import PIcon from './Icon';
import PButton from './Button';
import PSkipLink from './SkipLink';
import PAccordion from './Accordion';
import PInput from './Input';
import PLabel from './Label';
import PInputPhone from './InputPhone';
import PInputText from './InputText';
import PAutoComplete from './Autocomplete';
import PDialog from './Dialog';
import PInputSlider from './InputSlider';
import PCard from './Card';
import PRate from './Rate';
import PDateInput from './DateInput';
import PCheckbox from './Checkbox';
import PMessage from './Message';
import PToast from './Toast';
import {
  PText,
  PH1,
  PH2,
  PH3,
  PBlockquote,
} from './Typography';


export interface PhotonComponents {
  [key: string]: Component
}

const components: PhotonComponents = {
  PButton,
  PSkipLink,
  PAccordion,
  PAutoComplete,
  PIcon,
  PInputPhone,
  PInputText,
  PInput,
  PLabel,
  PDialog,
  PText,
  PH1,
  PH2,
  PH3,
  PBlockquote,
  PInputSlider,
  PCard,
  PRate,
  PDateInput,
  PCheckbox,
  PMessage,
  PToast,
};

export type PhotonComponentKeys = keyof PhotonComponents

export default components