import { Ref } from '@vue/composition-api';

export interface ButtonStylelist {
  primary: string[];
  secondary: string[];
  outline: string[];
}

export interface Props {
  label?: string;
  type?: string;
  disabled: boolean;
  valid?: boolean;
  size?: string;
  buttonStyle: string;
}

export const ButtonStylePrimary = 'primary';
export const ButtonStyleSecondary = 'secondary';
export const ButtonStyleOutline = 'outline';
export type ButtonType = typeof ButtonStylePrimary | typeof ButtonStyleSecondary | typeof ButtonStyleOutline;

export const ButtonSmall = 'small';
export const ButtonMedium = 'medium';
export const ButtonLarge = 'large';
export type ButtonSize = typeof ButtonSmall | typeof ButtonMedium | typeof ButtonLarge;

export const TypeSubmit = 'submit'
export const TypeButton = 'button'
export type HTMLType = typeof TypeSubmit | typeof TypeButton;

export interface Setup {
  elRef: Ref<HTMLElement | undefined>;
  classList: string[];
  styleList: Ref<never[]>;
  onClick: any;
}