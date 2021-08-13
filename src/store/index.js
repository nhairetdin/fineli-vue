import { createStore } from "vuex"

export default createStore({
  state: {
    componentData: [],
    referenceValues: {},
    foodData: [],
    filterKeyword: "",
    foodHover: {},
    foodSelected: []
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
    SET_FILTER_KEYWORD(state, payload) {
      state.filterKeyword = payload
    },
    SET_FOOD_HOVER(state, payload) {
      state.foodHover = payload
    },
    SORT_FOOD_DATA(state, payload) {
      state.foodData = state.foodData.sort((a, b) => {
        return payload.order
          ? b[payload.code] - a[payload.code]
          : a[payload.code] - b[payload.code]
      })
    },
    ADD_FOOD_SELECTED(state, payload) {
      state.foodSelected = [...state.foodSelected, payload]
    }
  },
  actions: {
    async fetchComponentData({ commit }) {
      let data = await fetch("https://ravintoinfo.xyz/basedata/components/")
      data = await data.json()
      console.log(data.originalRows[1][0])
      commit("SET_REFERENCE_VALUES", data.originalRows[1][0])
      commit("SET_INITIAL_COMPONENT_DATA", data.classifiedRows)
    },
    async fetchFoodData({ commit }) {
      let data = await fetch("https://ravintoinfo.xyz/basedata/food/")
      data = await data.json()
      console.log(data)
      commit("SET_FOOD_DATA", data)
    },
  },
  modules: {},
})
