import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/common/home'
import login from '@/components/page/login'
import readme from '@/components/page/readme'
import baseTable from '@/components/page/baseTable'
import vueTable from '@/components/page/vueTable'
import upload from '@/components/page/upload'
import vcharts from '@/components/page/vuecharts'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', name: 'login', component: login },
    {
      path: '/readme', component: home, children: [
        {
          path: '/', name: 'readme', component: readme
        },
        {
          path: '/baseTable', name: 'baseTable', component: baseTable
        },
        {
          path: '/vueTable', name: 'vueTable', component: vueTable
        },
        {
          path: '/upload', name: 'upload', component: upload
        },
        {
          path: '/vcharts', name: 'vcharts', component: vcharts
        }
      ]
    },
  ]
})
