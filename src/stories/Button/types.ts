export interface ButtonStylelist {
  primary: string[];
  secondary: string[];
  outline: string[];
}

export interface Props {
  label?: string;
  type?: string;
  disabled?: boolean;
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
  elRef: any;
  classList: any;
  styleList: any;
  onClick: any;
}