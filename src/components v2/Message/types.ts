export const MessageSuccess = 'success';
export const MessageInfo = 'info';
export const MessageError = 'error';
export const MessageWarning = 'warning';

export type MessageType =
  | typeof MessageSuccess
  | typeof MessageInfo
  | typeof MessageError
  | typeof MessageWarning;
