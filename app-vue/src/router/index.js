/*
 * router/index.js
 *    Declare application routes and page components to render
 */

import { createRouter, createWebHistory } from 'vue-router'

import Artist from '../pages/Artist.vue'
import Index from '../pages/Index.vue'
import Math from '../pages/Math.vue'
import Unbox from '../pages/Unbox.vue'

const routes = [
  {
    path: '/',  
    name: 'Index',
    component: Index
  },
  {
    path: '/artist', 
    name: 'Artist',
    component: Artist
  },
  {
    path: '/math',  
    name: 'Math',
    component: Math
  },
  {
    path: '/unbox', 
    name: 'Unbox',
    component: Unbox
  }
]

const router = createRouter({
  history: createWebHistory("/"),
  routes
})

export default router
