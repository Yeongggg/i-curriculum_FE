// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isAuthenticated: false,
    token: null,
    user: null
  },
  mutations: {
    setAuthentication(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
      state.token = payload.token;
    },
    setUser(state, user) {
      state.user = user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    }
  },
  actions: {
    login({ commit }, { token, user }) {
      commit('setAuthentication', { isAuthenticated: true, token });
      commit('setUser', user);
      localStorage.setItem("authorization", token);
      localStorage.setItem("isAuthenticated", true);
    },
    logout({ commit }) {
      commit('logout');
      localStorage.removeItem("authorization");
      localStorage.removeItem("isAuthenticated");
    }
  },
  getters: {
    isAuthenticated: state => state.isAuthenticated,
    token: state => state.token,
    user: state => state.user
  }
});

export default store;
