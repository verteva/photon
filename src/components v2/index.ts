import { Component } from 'vue';
import P2Button from './Button';
import P2Input from './Input';
import P2InputNumber from './InputNumber';
import P2Label from './Label';
import P2Card from './Card';

export interface PhotonComponents {
  [key: string]: Component;
}

const components: PhotonComponents = {
  P2Button,
  P2Input,
  P2InputNumber,
  P2Label,
  P2Card,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
