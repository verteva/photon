import { Component } from 'vue';
import P2Button from './Button';
import P2InputNumber from './InputNumber';

export interface PhotonComponents {
  [key: string]: Component;
}

const components: PhotonComponents = {
  P2Button,
  P2InputNumber,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
