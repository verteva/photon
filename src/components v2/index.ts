import { Component } from 'vue';
import P2Button from './Button';
import P2InputNumber from './InputNumber';
import P2Label from './Label';

export interface PhotonComponents {
  [key: string]: Component;
}

const components: PhotonComponents = {
  P2Button,
  P2InputNumber,
  P2Label,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
