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
  },
  [GET_GOODS_REQUEST]: state => {
    state.status.goods = 'loading'
  },
  [GET_GOODS_SUCCESS]: (state, res) => {
    state.status.goods = 'success'
    console.log(res)
  },
  [GET_GOODS_FAILED]: state => {
    state.status.goods = 'error'
  },
  [GET_CENTERS_REQUEST]: state => {
    state.status.centers = 'loading'
  },
  [GET_CENTERS_SUCCESS]: (state, res) => {
    state.status.centers = 'success'
    console.log(res)
  },
  [GET_CENTERS_FAILED]: state => {
    state.status.centers = 'error'
  },
  [POST_SPONSERSHIPS_REQUEST]: state => {
    state.status.sponserships = 'loading'
  },
  [POST_SPONSERSHIPS_SUCCESS]: (state, res) => {
    state.status.sponserships = 'success'
    console.log(res)
  },
  [POST_SPONSERSHIPS_FAILED]: state => {
    state.status.sponserships = 'error'
  },
  [GET_CENTER_SPONSERSHIPS_REQUEST]: state => {
    state.status.center_sponserships = 'loading'
  },
  [GET_CENTER_SPONSERSHIPS_SUCCESS]: (state, res) => {
    state.status.center_sponserships = 'success'
    console.log(res)
  },
  [GET_CENTER_SPONSERSHIPS_FAILED]: state => {
    state.status.center_sponserships = 'error'
  }
}

const actions = {
  [GET_GOODS_REQUEST]: ({commit, state, getters, rootGetters}) => {
    commit(GET_GOODS_REQUEST)
    return new Promise((resolve, reject) => {
      $http.get('/goods')
        .then(res => {
          commit(GET_GOODS_SUCCESS, res)
          resolve()
        })
        .catch(err => {
          commit(GET_GOODS_FAILED)
          reject(err)
        })
    })
  },
  [GET_CENTERS_REQUEST]: ({commit, state, getters, rootGetters}, goodId) => {
    commit(GET_CENTERS_REQUEST)
    return new Promise((resolve, reject) => {
      $http.get(`/centers?good_id=${goodId}`)
        .then(res => {
          commit(GET_CENTERS_SUCCESS, res)
          resolve()
        })
        .catch(err => {
          commit(GET_CENTERS_FAILED)
          reject(err)
        })
    })
  },
  [POST_SPONSERSHIPS_REQUEST]: ({commit, state, getters, rootGetters}, params) => {
    commit(POST_SPONSERSHIPS_REQUEST)
    return new Promise((resolve, reject) => {
      $http.post(`/sponserships`, params)
        .then(res => {
          commit(POST_SPONSERSHIPS_SUCCESS, res)
          resolve()
        })
        .catch(err => {
          commit(POST_SPONSERSHIPS_FAILED)
          reject(err)
        })
    })
  },
  [GET_CENTER_SPONSERSHIPS_REQUEST]: ({commit, state, getters, rootGetters}, centerId) => {
    commit(GET_CENTER_SPONSERSHIPS_REQUEST)
    return new Promise((resolve, reject) => {
      $http.get(`/centers/${centerId}/sponserships`)
        .then(res => {
          commit(GET_CENTER_SPONSERSHIPS_SUCCESS, res)
          resolve()
        })
        .catch(err => {
          commit(GET_CENTER_SPONSERSHIPS_FAILED)
          reject(err)
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
