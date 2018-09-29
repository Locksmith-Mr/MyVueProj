import types from './../types';

const state = {
  count: 0,
};

var getters = {
  count (state) {
    return state.count;
  },
};

const actions = {
  add({commit, state}) {
    commit (types.ADD);
  },
  down({commit, state}) {
      commit (types.DOWN);

    // if (state > 5) {
     
    // }
  },
};

const mutations = {
  [types.ADD] (state) {
    state.count++;
  },
  [types.DOWN] (state) {
    state.count--;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
