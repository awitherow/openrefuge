<template>
  <div id="find-help"
       class="container--full">

    <div class="action-container">
      <button @click="getLocation">LOCATE</button>
      <button @click="provideSuggestion">SUGGEST</button>
    </div>

    <gmap-map :options="{styles: styles}"
              style="height: 100%; width: 100%; position: absolute; top: 0; left: 0;"
              :center="{lat: 37.99, lng: 23.72 }"
              :zoom="12">

    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'find-help',
  data() {
    return {
      styles: require('./styles.json')
    }
  },
  methods: {
    getLocation() {
      console.log('get location')
    },
    provideSuggestion() {
      console.log('provide suggestion')
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

.action-container {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 5px;
}

button {
  border: 1px solid black;
  padding: 10px;
  background: rgba(255, 255, 255, 0.60);
  text-transform: uppercase;
  margin: 5px;
}

button:hover {
  background: #FFF;
}
</style>
