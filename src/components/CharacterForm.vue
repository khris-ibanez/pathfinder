<template>
  <form @submit.prevent="save">
    <input v-model="name" placeholder="Nombre del personaje" required />

    <RaceSelector v-model="race" />

    <StatsInput v-model="stats" />

    <button type="submit">Guardar personaje</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCharacterStore } from '../stores/character'
import RaceSelector from './RaceSelector.vue'
import StatsInput from './StatsInput.vue'

const router = useRouter()
const store = useCharacterStore()

const name = ref(store.name)
const race = ref(store.race)
const stats = ref({ ...store.stats })

function save() {
  if (!name.value || !race.value) {
    alert('Por favor, ingresa nombre y selecciona una raza')
    return
  }

  store.characters.push({
    name: name.value,
    race: race.value,
    stats: { ...stats.value }
  })

  alert('Personaje guardado correctamente')

  // Limpiar formulario
  name.value = ''
  race.value = ''
  stats.value = {
    fuerza: 10,
    destreza: 10,
    constitucion: 10,
    inteligencia: 10,
    sabiduria: 10,
    carisma: 10
  }

  // Redirigir al Home
  router.push({ name: 'home' })
}
</script>

<style scoped>
.pf-form {
  background: #f5ecd6;
  border: 2px solid #6c2e1f;
  border-radius: 12px;
  box-shadow: 0 5px 24px 0 #6c2e1f20;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 420px;
  margin: 0 auto;
}

.pf-title {
  color: #6c2e1f;
  font-family: "Crimson Pro", serif;
  letter-spacing: 1px;
  font-size: 1.6em;
  text-align: center;
  margin-bottom: 6px;
  text-shadow: 0 2px 1px #a76a21;
}

.pf-input,
.pf-selector,
.pf-stats {
  padding: 10px 12px;
  border: 2px solid #a76a21;
  border-radius: 6px;
  background: #fff8e1;
  color: #2e1a13;
  font-size: 1.07em;
  font-family: inherit;
  box-shadow: 0 3px 10px 0 #d2a33115;
  transition: border 0.2s;
}

.pf-input:focus,
.pf-selector:focus,
.pf-stats:focus {
  border-color: #d2a331;
  outline: none;
}

.pf-btn {
  background: linear-gradient(90deg, #d2a331 70%, #a76a21 100%);
  color: #2e1a13;
  border: 2px solid #a76a21;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1.07em;
  padding: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: 0 4px 16px 0 #d2a33124;
  transition: background 0.22s, border 0.22s;
}

.pf-btn:hover,
.pf-btn:focus {
  background: linear-gradient(90deg, #b6891c 70%, #6c2e1f 100%);
  border-color: #6c2e1f;
}

.pf-form input::placeholder {
  color: #a76a21;
  opacity: 0.7;
}
</style>
