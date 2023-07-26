export interface ButtonStylelist {
  primary: string[];
  secondary: string[];
  plain: string[];
}

export const ButtonStyles = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primary-outline',
  PRIMARY_LINK: 'primary-link',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondary-outline',
  SECONDARY_LINK: 'secondary-link',
} as const;

export type ButtonStyle = valueof<typeof ButtonStyles>;

export const ButtonSizes = {
  EXTRA_SMALL: 'xs',
  SMALL: 'sm',
  MEDIUM: 'md',
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
