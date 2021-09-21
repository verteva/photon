export interface ToastStyleType {
  classes: string[];
  icon: string;
}

export const ToastSuccess = 'success';
export const ToastInfo = 'info';
export const ToastError = 'error';
export const ToastAlert = 'alert';


export type ToastType = typeof ToastSuccess | typeof ToastInfo | typeof ToastError | typeof ToastAlert