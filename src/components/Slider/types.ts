export interface SliderData {
  id:string;
  pressed:boolean;
  draggable: any;
}

export interface SliderTrackRef {
  getBoundingClientRect():any;
}