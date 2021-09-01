export interface StepDataType {
  increment: number;
  min: number;
  max: number;
}

export interface SliderData {
  id: string;
  pressed: boolean;
  draggable: any;
}

export interface SliderTrackRef {
  getBoundingClientRect():any;
}