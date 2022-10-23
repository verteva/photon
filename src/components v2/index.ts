import { Component } from 'vue';
import P2Form from './Form';
import P2Button from './Button';
import P2Input from './Input';
import P2InputNumber from './InputNumber';
import P2Label from './Label';
import P2Card from './Card';
import P2Message from './Message';
import P2InputCheckbox from './Molecules/Forms/InputCheckbox';
import P2InputCheckboxGroup from './Molecules/Forms/InputCheckboxGroup';

export interface PhotonComponents {
  [key: string]: Component;
}

const components: PhotonComponents = {
  P2Form,
  P2Button,
  P2Input,
  P2InputNumber,
  P2Label,
  P2Card,
  P2Message,
  P2InputCheckbox,
  P2InputCheckboxGroup,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
