import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '../pages/MainPage'
import LayoutsContainer from '../layouts/LayoutsContainer'
Vue.use(Router)

const routes = [{
    path: '/',
    component: LayoutsContainer,
    redirect: '/main',
    children: [{
        path: 'main',
        name: 'main',
        component: MainPage,
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router