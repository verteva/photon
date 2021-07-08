export interface AccordionElementHeights {
  accordion: HTMLElement;
  headerHeight: number;
  contentHeight: number;
  totalHeight: number;
}
export interface Props {  
  singleFocus: boolean;
  openArrows: boolean;
  unstyled: boolean;
  fullWidth: boolean;
  open: boolean;
  disabled: boolean;
  section: string;
  backgroundColor: string;
  identifier: string | number;
}

export interface AccordionData {
  baseClassList: string[];
  renders: boolean;
  height: string;
  minHeight: number | null;
  maxHeight: number | null;
  expanded: boolean;
  initialRender: boolean;
  id: string;
}

// export const ButtonStylePrimary = 'primary';
// export const ButtonStyleSecondary = 'secondary';
// export const ButtonStyleOutline = 'outline';
// export type ButtonType = typeof ButtonStylePrimary | typeof ButtonStyleSecondary | typeof ButtonStyleOutline;

// export const ButtonSmall = 'small';
// export const ButtonMedium = 'medium';
// export const ButtonLarge = 'large';
// export type ButtonSize = typeof ButtonSmall | typeof ButtonMedium | typeof ButtonLarge;

// export const TypeSubmit = 'submit'
// export const TypeButton = 'button'
// export type HTMLType = typeof TypeSubmit | typeof TypeButton;