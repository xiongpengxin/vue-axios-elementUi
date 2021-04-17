export default {
  namespaced: true,
  state: {
    users: [],
  },
  mutations: {
    initusers(state, users) {
      state.users = users;
    },
  },
  actions: {
    getUsers({ commit }) {
      commit('initusers', [
        'shen-sir@https://github.com/shen-sir',
        'ryouaki@https://github.com/ryouaki',
      ]);
    },
  },
  getters: {

  },
};
