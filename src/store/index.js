import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Works from '../assets/works.json';

export default new Vuex.Store({
  state: {
    currentWeek: {},
    works: {...Works}
  },
  mutations: {
    setCurrentWeek(state, payload){
      state.currentWeek = state.works.weeks.find( work => work.id == payload);
    }
  },
  actions: {
    setCurrentWeek(context, payload){
      context.commit('setCurrentWeek', payload)
    }
  },
  getters: {
    getCurrentWeek(state){
      return state.currentWeek;
    }
  }
})
