import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import NewContact from '@/components/NewContact'
import ViewContact from '@/components/ViewContact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/add',
      name: 'new-contact',
      component: NewContact
    },
    {
      path: '/:person',
      name: 'view-contact',
      component: ViewContact
    }
  ]
})
