<template>
  <div id="find-help" class="container--full">
    <gmap-map :options="{styles: styles}" style="height: 100%; width: 100%; position: absolute; top: 0; left: 0;" :center="markers[0].position" :zoom="12">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" @click="showPlaceModal(m.id)"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'find-help',
  data() {
    return {
      styles: require('./styles.json'),
      center: { lat: 10.0, lng: 10.0 },
      markers: [{
        id: 'DE01',
        name: 'Diakonie-Hilfswerk Hamburg',
        description: 'Im Mai 2015 startete das Diakonische Hilfswerk das Projekt Flüchtlingslotsen. Das Projekt unterstützt durch geschulte ehrenamtlich Tätige nach Hamburg geflüchtete und migrierte Menschen. Die Lotsen begleiten Hilfesuchende zu Ämtern- und Behörden und anderen Einrichtungen. Auch längerfristige Unterstützung in Form von Patenschaften für Geflüchtete wird vermittelt. Zur Unterstützung der ehrenamtlichen Arbeit von Lotsinnen und Lotsen bietet das Projekt monatlich entweder Fortbildungen zu relevanten Themen oder es finden Treffen zum Austausch mit kollegialer Fallberatung statt.',
        tags: ['volunteer'],
        contact: 'Fluechtlingslotsen@diakonie-hamburg.de',
        site: 'diakonie-hamburg.de',
        position: { lat: 53.5479505, lng: 9.9347988 }
      }]
    }
  },
  methods: {
    showPlaceModal(id) {
      console.log(id)
    }
  }
}
</script>

<style scoped>
#find-help {
  position: relative;
}

.WIP {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.75);
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

button {
  border: 1px solid black;
  padding: 10px;
  background: none;
  text-transform: uppercase;
  min-width: 100px;
  margin: 5px;
}
</style>
