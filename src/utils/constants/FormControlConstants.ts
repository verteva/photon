export const FORM_CONTROL_SIZE = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
} as const;

export type FORM_CONTROL_SIZE_TYPE_KEYS = keyof typeof FORM_CONTROL_SIZE;
export type FORM_CONTROL_SIZE_TYPE = valueof<typeof FORM_CONTROL_SIZE>;
