import { defineStore } from 'pinia'

export const useCharacterStore = defineStore('character', {
  state: () => ({
    name: '',
    race: '',
    stats: {
      fuerza: 10,
      destreza: 10,
      constitucion: 10,
      inteligencia: 10,
      sabiduria: 10,
      carisma: 10
    },
    characters: [] // array para guardar los personajes creados
  }),
  actions: {
    setName(name) {
      this.name = name
    },
    setRace(race) {
      this.race = race
    },
    setStat(stat, value) {
      this.stats[stat] = value
    },
    addCharacter() {
      // Añade el personaje actual al array de personajes guardados
      this.characters.push({
        name: this.name,
        race: this.race,
        stats: { ...this.stats }
      })
      // Opcional: limpiar el personaje actual tras guardar
      this.name = ''
      this.race = ''
      this.stats = {
        fuerza: 10,
        destreza: 10,
        constitucion: 10,
        inteligencia: 10,
        sabiduria: 10,
        carisma: 10
      }
    }
  }
})
