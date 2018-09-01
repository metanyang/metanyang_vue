import Vue from 'vue'
import Vuex from 'vuex'
import { DONATE_INIT_STEP, DONATE_NEXT_STEP, DONATE_PREV_STEP } from './actions'
Vue.use(Vuex)

const state = {
  donateStep: 1
}

const getters = {
  getDonateStep: state => state.donateStep
}

const mutations = {
  [DONATE_INIT_STEP]: state => {
    state.donateStep = 1
  },
  [DONATE_NEXT_STEP]: state => {
    state.donateStep += 1
  },
  [DONATE_PREV_STEP]: state => {
    state.donateStep -= 1
  }
}

const actions = {

}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
