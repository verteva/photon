import { v4 as uuidv4 } from 'uuid';

export const namespaced = true;
export const state = { queue: [] };
export const mutations = {
  SET: (state, toastList) => (state.queue = toastList),
  ADD: (state, toast) => (state.queue.unshift(toast)),
};
export const actions = {
  popToast: ({ commit }, toast) => {
    return commit('ADD', {
      id: uuidv4(),
      ...toast,
    })
  },
  
  destroyToast: ({ commit, state }, id) => {    
    return commit('SET', state.queue.filter(t => t.id !== id));
  },
  
  removeToast: ({ commit, state }, id) => {    
    const setflaggedToast = state.queue.map(t => ({
      ...t,
      remove: t.id === id,
    }))
    return commit('SET', setflaggedToast);
  },
};
