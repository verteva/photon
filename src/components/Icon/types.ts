export type IconList = any;

export interface IconProperty {
  height: number;
  width: number;
}

export type IconSize =
  | typeof IconSizeXXs
  | typeof IconSizeXs
  | typeof IconSizeSm
  | typeof IconSizeMedium
  | typeof IconSizeLg
  | typeof IconSizeXl
  | typeof IconSizeXXl
  | typeof IconSizeXXXl
  | typeof IconSizeXXXXl
  | typeof IconSizeHuge;

export const IconSizeXXs = 'xxs';
export const IconSizeXs = 'xs';
export const IconSizeSm = 'sm';
export const IconSizeMedium = 'med';
export const IconSizeLg = 'lg';
export const IconSizeXl = 'xl';
export const IconSizeXXl = 'xxl';
export const IconSizeXXXl = 'xxxl';
export const IconSizeXXXXl = 'xxxxl';
export const IconSizeHuge = 'huge';

export const IconXXs = 10;
export const IconXs = 12;
export const IconSm = 18;
export const IconMedium = 22;
export const IconLg = 32;
export const IconXl = 50;
export const IconXXl = 60;
export const IconXXXl = 80;
export const IconXXXXl = 90;
export const IconHuge = 110;
