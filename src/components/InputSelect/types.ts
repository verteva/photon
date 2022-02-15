export interface InputSelectData {
  id: string;
  inFocus: boolean;
  _uid: string;
  selected: string | Record<string, unknown>;
}

export type InputValueType = string | number;
