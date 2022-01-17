export type Toast = {
  id?: string;
  type: string;
  title: string;
  description?: string;
  autoclose: boolean;
  remove?: boolean;
};

export type State = {
  queue: Toast[];
};
