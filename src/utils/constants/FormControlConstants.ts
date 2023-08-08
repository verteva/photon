export const FORM_CONTROL_SIZE = {
  SMALL: 'sm',
  MEDIUM: 'md',
} as const;

export type FORM_CONTROL_SIZE_TYPE_KEYS = keyof typeof FORM_CONTROL_SIZE;
export type FORM_CONTROL_SIZE_TYPE = valueof<typeof FORM_CONTROL_SIZE>;
