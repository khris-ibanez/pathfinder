<template>
  <div>
    <div v-for="(value, key) in localStats" :key="key">
      <label :for="key">{{ key }}</label>
      <input type="number" :id="key" v-model.number="localStats[key]" min="1" max="30" />
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const props = defineProps({ modelValue: Object })
const emit = defineEmits(['update:modelValue'])
const localStats = ref({ ...props.modelValue })

watch(localStats, val => emit('update:modelValue', val), { deep: true })
</script>
<style scoped>
div {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

label {
  margin-right: 10px;
  min-width: 110px;
  color: #6c2e1f;
  font-family: "Crimson Pro", serif;
  font-weight: 600;
  letter-spacing: 0.8px;
  font-size: 1em;
}

input[type="number"] {
  width: 60px;
  padding: 8px 10px;
  border: 2px solid #a76a21;
  border-radius: 6px;
  background: #fff8e1;
  color: #2e1a13;
  font-family: inherit;
  font-size: 1em;
  box-shadow: 0 3px 10px 0 #d2a33115;
  transition: border-color 0.2s;
  text-align: center;
}

input[type="number"]:focus {
  border-color: #d2a331;
  outline: none;
  box-shadow: 0 0 8px 2px #d2a33199;
}
</style>

