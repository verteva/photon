import { v4 as uuidv4 } from 'uuid';
import { ActionContext } from 'vuex';
import { Toast, State } from '@/components v2/Molecules/Components/Toast/types';

export const namespaced = true;

export const state: State = {
  queue: [],
  toasts: [],
  limit: 3,
};

export const mutations = {
  SET_TOASTS: (state: State, toastList: Toast[]): void => {
    state.toasts = toastList;
  },

  ADD_TOAST: (state: State, toast: Toast): void => {
    state.toasts.unshift(toast);
  },

  ENQUEUE: (state: State, toast: Toast): void => {
    state.queue.push(toast);
  },

  SET_QUEUE: (state: State, queue: Toast[]): void => {
    state.queue = queue;
  },

  SET_LIMIT: (state: State, limit: number): void => {
    state.limit = limit;
  },
};

export const actions = {
  setLimit: ({ commit }: ActionContext<State, any>, limit: number): void => {
    commit('SET_LIMIT', limit);
  },

  enqueueToast: (
    { commit, dispatch, state }: ActionContext<State, any>,
    toast: Toast
  ): void => {
    const createdToast = {
      id: uuidv4(),
      ...toast,
    };

    if (state.toasts.length < state.limit) {
      dispatch('addToast', createdToast);
      return;
    }

    commit('ENQUEUE', createdToast);
  },

  deQueueToast: ({
    commit,
    state,
    dispatch,
  }: ActionContext<State, any>): void => {
    const [deQueuedToast, ...queue] = state.queue;

    if (deQueuedToast) {
      dispatch('addToast', deQueuedToast);
    }

    commit('SET_QUEUE', queue);
  },

  addToast: (
    { commit, dispatch }: ActionContext<State, any>,
    toast: Toast
  ): void => {
    commit('ADD_TOAST', toast);

    if (toast.autoclose) {
      setTimeout(() => {
        dispatch('removeToast', toast.id);
      }, toast.delay || 5000);
    }
  },

  removeToast: (
    { commit, state, dispatch }: ActionContext<State, any>,
    id: string
  ): void => {
    commit(
      'SET_TOASTS',
      state.toasts.filter(t => t.id !== id)
    );

    if (state.queue.length && state.toasts.length < state.limit) {
      dispatch('deQueueToast');
    }
  },
};
