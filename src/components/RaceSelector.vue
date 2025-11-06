<template>
  <label>
    Raza:
    <select v-model="selectedRace">
      <option disabled value="">Selecciona una raza</option>
      <option v-for="race in races" :key="race.id" :value="race.id">{{ race.nombre }}</option>
    </select>
    <p v-if="selectedRace">
      {{ races.find(r => r.id === selectedRace).descripcion }}
    </p>
  </label>
</template>
<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ modelValue: String })
const emit = defineEmits(['update:modelValue'])
const selectedRace = ref(props.modelValue)

watch(selectedRace, (val) => emit('update:modelValue', val))

const races = [
  { id: 'humano', nombre: 'Humano', descripcion: 'Versátiles y adaptables.' },
  { id: 'elfo', nombre: 'Elfo', descripcion: 'Gráciles y hábiles.' },
  { id: 'enano', nombre: 'Enano', descripcion: 'Resistentes y leales.' },
  // ... agrega más razas
]
</script>
<style scoped>
label {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  color: #6c2e1f;
  font-family: "Crimson Pro", serif;
  font-weight: 600;
  letter-spacing: 1px;
}

select {
  margin-top: 6px;
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

select:focus {
  border-color: #d2a331;
  outline: none;
}

option[disabled] {
  color: #a76a21;
  opacity: 0.7;
}

p {
  margin-top: 10px;
  background: #f5ecd6;
  border-left: 4px solid #a76a21;
  padding: 8px 14px;
  color: #6c2e1f;
  font-size: 1em;
  box-shadow: 0 2px 8px 0 #6c2e1f10;
  border-radius: 4px;
  font-family: "Crimson Pro", serif;
}
</style>
