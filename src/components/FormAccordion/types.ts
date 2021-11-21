export interface AccordionElementHeights {
  accordion: HTMLElement;
  content: HTMLElement;
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
  height: string;
  minHeight: number | null;
  maxHeight: number | null;
  expanded: boolean;
  focussed: boolean;
  initialRender: boolean;
  expandComplete: boolean;
  id: string;
  countTest: number;
}
