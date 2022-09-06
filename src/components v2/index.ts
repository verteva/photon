import { Component } from 'vue';
import P2Button from './Button';
import P2Input from './Input';

export interface PhotonComponents {
  [key: string]: Component;
}

const components: PhotonComponents = {
  P2Button,
  P2Input,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
