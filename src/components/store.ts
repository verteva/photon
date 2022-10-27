import Vue from 'vue';
import Vuex from 'vuex';
import * as toast from './Toast/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    toast,
    theme: {
      namespaced: true,
      state: {
        theme: {},
        themeName: '',
      },
      mutations: {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        SET_THEME: (state, theme) => {
          state.theme = theme;
        },
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        SET_THEME_NAME: (state, themeName) => {
          state.themeName = themeName;
        },
      },
      actions: {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        setTheme: ({ commit }, theme) => {
          commit('SET_THEME', theme);
        },
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        setThemeName: ({ commit }, themeName) => {
          commit('SET_THEME_NAME', themeName);
        },
      },
    },
  },
});
