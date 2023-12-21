export interface InputPhoneData {
  id: string;
  inFocus: boolean;
  innerValue: string;
  value: string;
  results: object;
  isValid: boolean;
  _uid: string;
  baseClassList: string[];
}

export type InputValueType = string | number;
