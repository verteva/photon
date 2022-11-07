import Vue from 'vue';
import Vuex from 'vuex';
import * as toast from './toast';
import theme from './theme';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    toast,
    theme,
  },
});
