import { Component } from 'vue';
import P2Form from './Atoms/Forms/Form';
import P2Button from './Atoms/Components/Button';
import P2InputNumber from './Molecules/Forms/InputNumber';
import P2InputText from './Atoms/Forms/InputText';
import P2Card from './Atoms/Components/Card';
import P2Message from './Molecules/Components/Message';
import P2InputCheckbox from './Molecules/Forms/InputCheckbox';
import P2InputCheckboxGroup from './Molecules/Forms/InputCheckboxGroup';

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
  P2InputCheckbox,
  P2InputCheckboxGroup,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
