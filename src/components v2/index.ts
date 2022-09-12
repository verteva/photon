import { Component } from 'vue';
import P2Button from './Button';
import P2Message from './Message';

export interface PhotonComponents {
  [key: string]: Component;
}

const components: PhotonComponents = {
  P2Button,
  P2Message,
};

export type PhotonComponentKeys = keyof PhotonComponents;

export default components;
