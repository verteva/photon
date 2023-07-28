export const CardSizes = {
  XS: 'xs',
  SM: 'sm',
  MD: 'md',
} as const;

export type CardSize = valueof<typeof CardSizes>;

export interface Props {
  size?: string;
}
