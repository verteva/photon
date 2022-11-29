import { Component } from 'vue';
import P2Form from './Atoms/Forms/Form';
import P2Button from './Atoms/Components/Button';
import P2InputNumber from './Molecules/Forms/InputNumber';
import P2InputText from './Molecules/Forms/InputText';
import P2InputDate from './Molecules/Forms/InputDate';
import P2Card from './Atoms/Components/Card';
import P2BackDrop from './Atoms/Components/BackDrop';
import P2Headline from './Atoms/Components/Headline';
import P2Message from './Molecules/Components/Message';
import P2Toast from './Molecules/Components/Toast';
import P2Dialog from './Molecules/Components/Dialog';
import P2InputCheckbox from './Molecules/Forms/InputCheckbox';
import P2InputCheckboxGroup from './Molecules/Forms/InputCheckboxGroup';
import P2InputRadioButton from './Molecules/Forms/InputRadioButton';
import P2InputRadioButtonGroup from './Molecules/Forms/InputRadioButtonGroup';
import P2InputToggle from './Molecules/Forms/InputToggle';
import P2InputPhone from './Molecules/Forms/InputPhone';
import P2InputAutoComplete from './Molecules/Forms/InputAutoComplete';
import P2Accordion from './Molecules/Components/Accordion';
import P2ListItem from './Atoms/Components/ListItem';
import P2ContentCard from './Molecules/Components/ContentCard';

export interface PhotonComponents {
  [key: string]: Component;
}

const components: PhotonComponents = {
  P2Form,
  P2Button,
  P2InputNumber,
  P2InputText,
  P2Card,
  P2Message,
  P2Toast,
  P2Dialog,
  P2InputDate,
  P2ContentCard,
  P2InputCheckbox,
  P2InputCheckboxGroup,
  P2InputRadioButton,
  P2InputRadioButtonGroup,
  P2InputToggle,
  P2InputPhone,
  P2InputAutoComplete,
  P2BackDrop,
  P2Headline,
  P2ListItem,
  P2Accordion,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
