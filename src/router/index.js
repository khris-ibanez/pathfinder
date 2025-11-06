import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateCharacterView from '../views/CreateCharacterView.vue'
import SavedCharactersView from '../views/SavedCharactersview.vue'
import RacesListView from '../views/RacesListView.vue'
import RacesDetailView from '../views/RacesDetailView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/crear', name: 'crear', component: CreateCharacterView },
  { path: '/guardados', name: 'guardados', component: SavedCharactersView },
  { path: '/razas', name: 'razas-lista', component: RacesListView },          // Lista de razas
  { path: '/razas/:id', name: 'raza-detalle', component: RacesDetailView },
  { path: '/:catchAll(.*)', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
