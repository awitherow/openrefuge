<template>
  <div id="find-help" class="container--full">
    <partner-overlay :partnerId="partnerId" :visible="overlayVisible" :toggle="togglePartner" />
    <gmap-map :options="{styles: styles}" style="height: 100%; width: 100%; position: absolute; top: 0; left: 0;" :center="markers[0].position" :zoom="12">
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" @click="togglePartner(m.id)"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'find-help',
  components: {
    'partner-overlay': require('./partner')
  },
  data: function () {
    return {
      styles: require('./styles.json'),
      center: { lat: 10.0, lng: 10.0 },
      markers: [{
        id: 'DE01',
        position: { lat: 53.5479505, lng: 9.9347988 }
      }],
      partnerId: undefined,
      overlayVisible: false
    }
  },
  methods: {
    togglePartner(id) {
      this.partnerId = id
      this.overlayVisible = !this.overlayVisible
      console.log(this.partnerId, this.overlayVisible)
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
