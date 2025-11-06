<template>
  <div v-if="race">
    <h2>{{ race.nombre }}</h2>
    <p><strong>Resumen:</strong> {{ race.descripcion }}</p>
    <p><strong>Descripción completa:</strong> {{ race.descripcion2 }}</p>
    <router-link to="/razas">Volver a la lista</router-link>
  </div>
  <p v-else>Raza no encontrada.</p>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const races = [
  {
    id: 'humano',
    nombre: 'Humano',
    descripcion: 'Versátiles y adaptables.',
    descripcion2: 'Los humanos son una raza muy flexible y ambiciosa que puede prosperar en casi cualquier entorno. Suelen ser innovadores y audaces.'
  },
  {
    id: 'elfo',
    nombre: 'Elfo',
    descripcion: 'Gráciles y hábiles.',
    descripcion2: 'Los elfos son longevos y poseen habilidades innatas para la magia y el combate. Se caracterizan por su agilidad y gran percepción.'
  },
  {
    id: 'enano',
    nombre: 'Enano',
    descripcion: 'Resistentes y leales.',
    descripcion2: 'Los enanos son robustos y trabajadores, conocidos por su resistencia física, habilidades en la minería y fuerte sentido del honor.'
  }
]

const race = ref(null)

function findRace() {
  race.value = races.find(r => r.id === route.params.id)
}

findRace()
</script>
<style scoped>
div {
  max-width: 480px;
  margin: 30px auto;
  padding: 24px 28px;
  background: #f5ecd6;
  border: 2px solid #6c2e1f;
  border-radius: 12px;
  box-shadow: 0 5px 24px 0 #6c2e1f20;
  font-family: "Crimson Pro", serif;
  color: #6c2e1f;
}

h2 {
  font-size: 1.8em;
  margin-bottom: 14px;
  text-shadow: 0 2px 1px #a76a21;
  letter-spacing: 1px;
}

p {
  line-height: 1.45;
  margin-bottom: 16px;
  font-size: 1.1em;
  color: #4f2c1b;
}

strong {
  color: #6c2e1f;
  font-weight: 700;
}

router-link {
  display: inline-block;
  padding: 10px 16px;
  background: linear-gradient(90deg, #d2a331 70%, #a76a21 100%);
  color: #2e1a13;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 16px 0 #d2a33124;
  text-decoration: none;
  transition: background 0.22s, color 0.22s;
}

router-link:hover,
router-link:focus {
  background: linear-gradient(90deg, #b6891c 70%, #6c2e1f 100%);
  color: #fff9e6;
  cursor: pointer;
}
</style>

