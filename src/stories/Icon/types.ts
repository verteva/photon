export interface IconData {
  icons: any;
}

export interface IconProperty {
  height: IconSize;
  width: IconSize;
}

export type IconSize = typeof IconSizeSmall | typeof IconSizeMedium | typeof IconSizeLarge;
export const IconSizeSmall = 12;
export const IconSizeMedium = 30;
export const IconSizeLarge = 45;

export type IconType = typeof IconTypeSmall | typeof IconTypeMedium | typeof IconTypeLarge;
export const IconTypeSmall = 'small';
export const IconTypeMedium = 'medium';
export const IconTypeLarge = 'large';

