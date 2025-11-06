<template>
  <div>
    <h1>Bienvenido a Creador de Personajes Pathfinder</h1>
    <router-link to="/crear">Crear nuevo personaje</router-link>
    <router-link to="/guardados">Ver personajes guardados</router-link>
    <router-link to="/razas">Ver Razas</router-link>
  </div>
</template>
<script setup>
</script>
<style scoped>
div {
  max-width: 480px;
  margin: 40px auto;
  padding: 20px;
  background: #f5ecd6;
  border: 2px solid #6c2e1f;
  border-radius: 12px;
  box-shadow: 0 5px 24px 0 #6c2e1f20;
  font-family: "Crimson Pro", serif;
  color: #6c2e1f;
  text-align: center;
}

h1 {
  font-size: 1.9em;
  margin-bottom: 24px;
  text-shadow: 0 2px 1px #a76a21;
  letter-spacing: 1.2px;
}

router-link {
  display: inline-block;
  margin: 8px 12px;
  padding: 12px 22px;
  background: linear-gradient(90deg, #d2a331 70%, #a76a21 100%);
  color: #2e1a13;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  box-shadow: 0 4px 16px 0 #d2a33124;
  transition: background 0.22s, color 0.2s;
}

router-link:hover,
router-link:focus {
  background: linear-gradient(90deg, #b6891c 70%, #6c2e1f 100%);
  color: #fff9e6;
  cursor: pointer;
}
</style>
