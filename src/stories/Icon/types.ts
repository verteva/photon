export type IconList = any;

export interface IconProperty {
  height: number;
  width: number;
}

export type IconSize =
  typeof IconSizeXs | 
  typeof IconSizeSm |
  typeof IconSizeMedium |
  typeof IconSizeLg |
  typeof IconSizeXl |
  typeof IconSizeXXl |
  typeof IconSizeHuge;
  
export const IconSizeXs = 'xs';
export const IconSizeSm = 'sm';
export const IconSizeMedium = 'med';
export const IconSizeLg = 'lg';
export const IconSizeXl = 'xl';
export const IconSizeXXl = 'xxl';
export const IconSizeHuge = 'huge';

export const IconXs = 12;
export const IconSm = 18;
export const IconMedium = 22;
export const IconLg = 32;
export const IconXl = 50;
export const IconXXl = 60;
export const IconHuge = 110;
