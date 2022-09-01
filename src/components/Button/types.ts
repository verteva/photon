export interface ButtonStylelist {
  primary: string[];
  secondary: string[];
  plain: string[];
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
export const ButtonStylePlain = 'plain';
export type ButtonType =
  | typeof ButtonStylePrimary
  | typeof ButtonStyleSecondary
  | typeof ButtonStylePlain;

export const ButtonXSmall = 'xs';
export const ButtonSmall = 'small';
export const ButtonMedium = 'medium';
export const ButtonLarge = 'large';
export type ButtonSize =
  | typeof ButtonXSmall
  | typeof ButtonSmall
  | typeof ButtonMedium
  | typeof ButtonLarge;

export const TypeSubmit = 'submit';
export const TypeButton = 'button';
export type HTMLType = typeof TypeSubmit | typeof TypeButton;
