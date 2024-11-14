import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MentionLegales from '@/views/MentionLegales.vue'
import PolitiqueConfidentialite from '@/views/PolitiqueConfidentialite.vue'
import ProfileUser from '@/views/ProfileUser.vue'
import InscriptionView from '@/views/InscriptionView.vue'
import MesDiscussions from '@/views/MesDiscussions.vue'
import CreateDiscussion from '@/views/CreateDiscussion.vue'
import Test from '@/views/TestView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/inscription',
    name: 'inscription',
    component: InscriptionView
  },
  {
    path: '/mentionlegales',
    name: 'mentionlegales',
    component: MentionLegales
  },
  {
    path: '/cgu',
    name: 'cgu',
    component: PolitiqueConfidentialite,
  },
  {
    path: '/Decouvrirprofil',
    name: 'Decouvrirprofil',
    component: ProfileUser,
  },
  {
    path: '/mesdiscussions',
    name: 'mes discussions',
    component: MesDiscussions,
  },
  {
    path: '/creatediscussion',
    name: 'create discussion',
    component: CreateDiscussion,
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
