import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'mavon-editor/dist/css/index.css'
import mavonEditor from 'mavon-editor'

import Index from '@/pages/index'
import Article from '@/pages/article'
import Edit from '@/pages/edit'
import SignIn from '@/pages/signin'

Vue.use(Router)
Vue.use(iView)
Vue.use(mavonEditor)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/article',
    name: 'Article',
    component: Article
  }, {
    path: '/edit',
    name: 'Edit',
    component: Edit
  }, {
    path: '/sign_in',
    name: 'SignIn',
    component: SignIn
  }]
})
