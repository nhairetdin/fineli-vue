import { createStore } from "vuex"

export default createStore({
  state: {
    componentData: [],
  },
  mutations: {
    SET_INITIAL_COMPONENT_DATA(state, payload) {
      console.log("FetchCompoonentData from backend", payload)
      state.componentData = payload
    },
  },
  actions: {
    fetchComponentData({ commit }) {
      fetch("https://ravintoinfo.xyz/basedata/components/")
        .then((response) => response.json())
        .then((data) => {
          commit('SET_INITIAL_COMPONENT_DATA', data.classifiedRows)
        })
    },
  },
  modules: {},
})
