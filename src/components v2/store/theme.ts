import { ActionContext } from 'vuex';

type Theme = { [key: string]: string };
interface State {
  theme: Theme;
  themeName: string;
}

export default {
  namespaced: true,
  state: {
    theme: {},
    themeName: '',
  },
  mutations: {
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    SET_THEME: (state: State, theme: Theme): void => {
      state.theme = theme;
    },
    SET_THEME_NAME: (state: State, themeName: string): void => {
      state.themeName = themeName;
    },
  },
  actions: {
    setTheme: ({ commit }: ActionContext<State, any>, theme: Theme): void => {
      commit('SET_THEME', theme);
    },
    setThemeName: (
      { commit }: ActionContext<State, any>,
      themeName: string
    ): void => {
      commit('SET_THEME_NAME', themeName);
    },
  },
};
