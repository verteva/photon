import Vue from 'vue';
import Vuex from 'vuex';
import * as toast from './Toast/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    toast,
  },
});
