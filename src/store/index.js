import { createStore } from 'vuex'
import req from '../tools/requests'

export default createStore({
  state: {
    componentData: [],
    referenceValues: {},
    foodData: [],
    filterKeyword: '',
    foodHover: [],
    foodSelected: [],
    sidebarVisible: false,
    loggedIn: false,
  },
  mutations: {
    SET_INITIAL_COMPONENT_DATA(state, payload) {
      console.log('FetchCompoonentData from backend', payload)
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
      state.foodHover = Array.isArray(payload) ? payload : [payload]
    },
    SORT_FOOD_DATA(state, payload) {
      state.foodData = state.foodData.sort((a, b) => {
        return payload.order
          ? b[payload.code] - a[payload.code]
          : a[payload.code] - b[payload.code]
      })
    },
    ADD_FOOD_SELECTED(state, payload) {
      console.log(payload)
      state.foodSelected = [...state.foodSelected, payload]
    },
    REMOVE_FOOD_SELECTED(state, payload) {
      state.foodSelected = state.foodSelected.filter(
        (food) => food.foodid !== payload,
      )
    },
    SET_SELECTED_FOOD_AMOUNT(state, payload) {
      state.foodSelected = state.foodSelected.map((food) => {
        if (food.foodid === payload.foodid) {
          return { ...food, amount: payload.amount }
        }
        return food
      })
    },
    TOGGLE_SIDEBAR(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    TOGGLE_LOGIN(state) {
      state.loggedIn = !state.loggedIn
    },
  },
  actions: {
    async fetchComponentData({ commit }) {
      let data = await fetch('https://ravintoinfo.xyz/basedata/components/')
      data = await data.json()
      console.log(data.originalRows[1][0])
      commit('SET_REFERENCE_VALUES', data.originalRows[1][0])
      commit('SET_INITIAL_COMPONENT_DATA', data.classifiedRows)
    },
    async fetchFoodData({ commit }) {
      let data = await fetch('https://ravintoinfo.xyz/basedata/food/')
      data = await data.json()
      console.log(data)
      commit('SET_FOOD_DATA', data)
    },
    async login({ commit }, user) {
      try {
        const request = req.login(user)
        const response = await fetch(request.url, { ...request.config })
        const data = await response.json()

        if (!response.ok) {
          console.log('Failed', data)
        } else {
          console.log('Logged in', data)
          window.localStorage.setItem('user', JSON.stringify(data))
          commit('TOGGLE_LOGIN')
        }
      } catch (err) {
        console.log(err)
      }
    },
    logout({ commit }) {
      window.localStorage.removeItem('user')
      commit('TOGGLE_LOGIN')
    },
  },
  modules: {},
})
