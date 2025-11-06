<template>
  <div>
    <h2>Personajes guardados</h2>
    <ul v-if="characters.length > 0">
      <li v-for="(char, index) in characters" :key="index">
        <strong>{{ char.name }}</strong> - {{ char.race }}
        <ul>
          <li v-for="(value, stat) in char.stats" :key="stat">{{ stat }}: {{ value }}</li>
        </ul>
      </li>
    </ul>
    <p v-else>No hay personajes guardados.</p>
  </div>
</template>

<script setup>
import { useCharacterStore } from '../stores/character'
const store = useCharacterStore()
const characters = store.characters
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
  margin-bottom: 22px;
  text-shadow: 0 2px 1px #a76a21;
  letter-spacing: 1.1px;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

ul > li {
  margin-bottom: 18px;
  padding: 12px 16px;
  background: #fff8e1;
  border: 2px solid #a76a21;
  border-radius: 10px;
  box-shadow: 0 3px 10px 0 #d2a33115;
}

ul > li > strong {
  font-weight: 700;
  font-size: 1.15em;
  color: #6c2e1f;
}

ul li ul {
  margin-top: 8px;
  margin-left: 16px;
  padding-left: 14px;
  border-left: 2px solid #a76a21;
}

ul li ul li {
  font-size: 1em;
  margin-bottom: 6px;
  color: #4f2c1b;
}
</style>
