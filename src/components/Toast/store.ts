import { v4 as uuidv4 } from 'uuid';
import { Commit } from 'vuex';
import { Toast, State } from './types';

export const namespaced = true;
export const state: State = { queue: [] };
export const mutations = {
  SET: (state: State, toastList: Toast[]): Toast[] => (state.queue = toastList),
  ADD: (state: State, toast: Toast): number => state.queue.unshift(toast),
};
export const actions = {
  popToast: ({ commit }: { commit: Commit }, toast: Toast): void => {
    return commit('ADD', {
      id: uuidv4(),
      ...toast,
    });
  },

  destroyToast: (
    {
      commit,
      state,
    }: {
      commit: Commit;
      state: State;
    },
    id: string
  ): void => {
    return commit(
      'SET',
      state.queue.filter((t) => t.id !== id)
    );
  },

  removeToast: (
    {
      commit,
      state,
    }: {
      commit: Commit;
      state: State;
    },
    id: string
  ): void => {
    const setflaggedToast = state.queue.map((t) => {
      const toastData = { ...t };
      if (typeof t.remove === 'undefined' && t.id === id) {
        toastData.remove = true;
      }
      return toastData;
    });
    return commit('SET', setflaggedToast);
  },
};
