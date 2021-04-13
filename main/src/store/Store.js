import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Sidebar_drawer: false,
    LayoutType: "full-sidebar",
    SidebarColor: "white",
    navbarColor: "primary",
    logoColor: "white",
  },
  mutations: {
    SET_LAYOUT_TYPE(state, payload) {
      state.LayoutType = payload;
    },
    SET_SIDEBAR_DRAWER(state, payload) {
      state.Sidebar_drawer = payload;
    },
  },
  actions: {
    setLayoutType({ commit }, width) {
      commit("SET_LAYOUT_TYPE", width);
    },
  },
  getters: {},
});
