import Vue from 'vue'
import Router from 'vue-router'
import LayoutsContainer from '@/layouts/LayoutsContainer'
import MainPage from '@/pages/MainPage'
import DonatePage from '@/pages/DonatePage'
import NewsPage from '@/pages/NewsPage'
import ShelterPage from '@/pages/ShelterPage'
import StoryPage from '@/pages/StoryPage'
import ContactPage from '@/pages/ContactPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: LayoutsContainer,
      redirect: '/main',
      children: [
        {
          name: 'main',
          path: 'main',
          component: MainPage
        },
        {
          name: 'donate',
          path: 'donate',
          component: DonatePage
        },
        {
          name: 'news',
          path: 'news',
          component: NewsPage
        },
        {
          name: 'shelter',
          path: 'shelter',
          component: ShelterPage
        },
        {
          name: 'story',
          path: 'story',
          component: StoryPage
        },
        {
          name: 'contact',
          path: 'contact',
          component: ContactPage
        }
      ]
    }
  ]
})
