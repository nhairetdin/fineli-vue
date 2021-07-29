import { createStore } from "vuex"

export default createStore({
  state: {
    componentData: [],
    referenceValues: {},
    foodData: [],
  },
  mutations: {
    SET_INITIAL_COMPONENT_DATA(state, payload) {
      console.log("FetchCompoonentData from backend", payload)
      state.componentData = payload
    },
    SET_REFERENCE_VALUES(state, payload) {
      state.referenceValues = payload
    },
    SET_FOOD_DATA(state, payload) {
      state.foodData = payload
    },
  },
  actions: {
    async fetchComponentData({ commit }) {
      let data = await fetch("https://ravintoinfo.xyz/basedata/components/")
      data = await data.json()

      commit('SET_REFERENCE_VALUES', data.originalRows[1])
      commit('SET_INITIAL_COMPONENT_DATA', data.classifiedRows)
    },
    async fetchFoodData({ commit }) {
      let data = await fetch("https://ravintoinfo.xyz/basedata/food/")
      data = await data.json()
      console.log(data)
      commit('SET_FOOD_DATA', data)
    }
  },
  modules: {},
})
