<template>
  <div>
    <h2>Razas de Pathfinder</h2>
    <ul>
      <li v-for="race in races" :key="race.id">
        <router-link :to="{ name: 'raza-detalle', params: { id: race.id } }">
          {{ race.nombre }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const races = [
  { id: 'humano', nombre: 'Humano', descripcion: 'Versátiles y adaptables.' },
  { id: 'elfo', nombre: 'Elfo', descripcion: 'Gráciles y hábiles.' },
  { id: 'enano', nombre: 'Enano', descripcion: 'Resistentes y leales.' }
]
</script>
<style scoped>
div {
  max-width: 440px;
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
  font-size: 1.7em;
  text-shadow: 0 2px 1px #a76a21;
  margin-bottom: 18px;
  letter-spacing: 1px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 14px;
}

router-link {
  display: inline-block;
  padding: 8px 20px;
  background: linear-gradient(90deg, #d2a331 75%, #a76a21 100%);
  color: #2e1a13;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 3px 12px 0 #d2a33122;
  transition: background 0.22s, color 0.22s;
}

router-link:hover,
router-link:focus {
  background: linear-gradient(90deg, #b6891c 75%, #6c2e1f 100%);
  color: #fff9e6;
  cursor: pointer;
}
</style>
