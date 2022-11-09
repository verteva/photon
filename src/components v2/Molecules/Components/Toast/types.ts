export type Toast = {
  id?: string;
  type: string;
  title: string;
  description?: string;
  autoclose: boolean;
  remove?: boolean;
  delay?: number;
};

export type State = {
  queue: Toast[];
  toasts: Toast[];
  limit: number;
};
