export interface MessageStyleType {
  classes: string[];
  icon: string;
}

export const MessageSuccess = 'success';
export const MessageInfo = 'info';
export const MessageError = 'error';
export const MessageWarning = 'warning';

export type MessageType =
  | typeof MessageSuccess
  | typeof MessageInfo
  | typeof MessageError
  | typeof MessageWarning;
