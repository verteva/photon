import { Component } from 'vue';
import P2Form from './Atoms/Forms/Form';
import P2Button from './Atoms/Components/Button';
import P2InputNumber from './Molecules/Forms/InputNumber';
import P2InputText from './Molecules/Forms/InputText';
import P2Card from './Atoms/Components/Card';
import P2Message from './Molecules/Components/Message';
import P2Toast from './Molecules/Components/Toast';
import P2InputCheckbox from './Molecules/Forms/InputCheckbox';
import P2InputCheckboxGroup from './Molecules/Forms/InputCheckboxGroup';
import P2InputRadioButton from './Molecules/Forms/InputRadioButton';
import P2InputRadioButtonGroup from './Molecules/Forms/InputRadioButtonGroup';
import P2InputToggle from './Molecules/Forms/InputToggle';

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
  P2InputCheckbox,
  P2InputCheckboxGroup,
  P2InputRadioButton,
  P2InputRadioButtonGroup,
  P2InputToggle,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
