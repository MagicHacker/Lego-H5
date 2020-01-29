import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/index.vue'
import mainPage from '../views/main-page/index.vue'
import worksPage from '../views/works-page/index.vue'
import templatePage from '../views/template-page/index.vue'
import personalCenter from '../views/personal-center/index.vue'
import editorPage from '../views/editor-page/index.vue'
Vue.use(VueRouter)

const routes: any = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainPage',
    name: 'mainPage',
    component: mainPage,
    children: [
      {
        path: 'worksPage',
        component: worksPage
      },
      {
        path: 'templatePage',
        component: templatePage
      },
      {
        path: 'personalCenter',
        component: personalCenter
      }
    ]
  },
  {
    path: '/editorPage',
    name: 'editorPage',
    component: editorPage
  },
  {
    path: '',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
