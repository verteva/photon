import { Component } from 'vue';
import P2Button from './Button';
import P2Label from './Label';
import P2Card from './Card';

export interface PhotonComponents {
  [key: string]: Component;
}

const components: PhotonComponents = {
  P2Button,
  P2Label,
  P2Card,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
