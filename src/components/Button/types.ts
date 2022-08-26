export interface ButtonStylelist {
  primary: string[];
  secondary: string[];
  plain: string[];
}

export const ButtonStyles = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primary-outline',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondary-outline',
  PLAIN: 'plain',
  TERTIARY: 'tertiary',
} as const;

export type ButtonStyle = valueof<typeof ButtonStyles>;

export const ButtonSizes = {
  EXTRA_SMALL: 'xs',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export type ButtonSize = valueof<typeof ButtonSizes>;

export const ButtonTypes = {
  BUTTON: 'button',
  SUBMIT: 'submit',
} as const;

export type HTMLType = valueof<typeof ButtonTypes>;

export interface Props {
  label?: string;
  type?: string;
  disabled: boolean;
  valid?: boolean;
  size?: string;
  buttonStyle: ButtonStyle;
}
