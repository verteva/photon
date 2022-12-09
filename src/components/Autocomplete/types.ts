export interface Props {
  optionIconSize?: string;
  openIndicatorIconSize?: string;
  fontSize?: string;
}
export const DropUp = 'up';
export const DropDown = 'down';
export type DropType = typeof DropUp | typeof DropDown;

export const IconXSmall = 'xs';
export const IconSmall = 'sm';
export const IconMedium = 'md';
export const IconLarge = 'lg';
export type IconSize =
  | typeof IconXSmall
  | typeof IconSmall
  | typeof IconMedium
  | typeof IconLarge;

export const FontXSmall = 'xs';
export const FontSmall = 'sm';
export const FontBase = 'base';
export const FontLarge = 'lg';
export type FontSize =
  | typeof FontXSmall
  | typeof FontSmall
  | typeof FontBase
  | typeof FontLarge;

export const LeadingTight = 'tight';
export const LeadingSnug = 'snug';
export const LeadingNormal = 'normal';
export const LeadingLoose = 'loose';
export const LeadingMax = 'max';
export type MarginSize =
  | typeof LeadingTight
  | typeof LeadingSnug
  | typeof LeadingNormal
  | typeof LeadingLoose
  | typeof LeadingMax;

export type InputValueType = string | number;
