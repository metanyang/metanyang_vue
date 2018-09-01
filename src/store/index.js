import Vue from 'vue'
import Vuex from 'vuex'
import {
  DONATE_INIT_STEP,
  DONATE_NEXT_STEP,
  DONATE_PREV_STEP,
  GET_GOODS_REQUEST,
  GET_GOODS_FAILED,
  GET_GOODS_SUCCESS,
  GET_CENTERS_REQUEST,
  GET_CENTERS_FAILED,
  GET_CENTERS_SUCCESS,
  POST_SPONSERSHIPS_REQUEST,
  POST_SPONSERSHIPS_FAILED,
  POST_SPONSERSHIPS_SUCCESS,
  GET_CENTER_SPONSERSHIPS_REQUEST,
  GET_CENTER_SPONSERSHIPS_FAILED,
  GET_CENTER_SPONSERSHIPS_SUCCESS
} from './actions'
import { $http } from '@/utils/api'

Vue.use(Vuex)

const state = {
  donateStep: 1,
  status: {
    goods: '',
    centers: '',
    sponserships: '',
    center_sponserships: ''
  }
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
  [GET_GOODS_REQUEST]: ({commit, state, getters, rootGetters}) => {
    commit(GET_GOODS_REQUEST)
    return new Promise((resolve, reject) => {
      $http.get('/goods')
        .then(res => {
          commit(GET_GOODS_SUCCESS, res)
        })
    })
  }
}

export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
