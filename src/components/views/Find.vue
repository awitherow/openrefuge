<template>
  <div id="find-help"
       class="container--full">
    <div>
      <gmap-map :options="{styles: styles}"
                style="height: 100%; width: 100%; position: absolute; top: 0; left: 0;"
                :center="{lat: 37.99, lng: 23.72 }"
                :zoom="12">

      </gmap-map>
    </div>
  </div>
</template>

<script>
export default {
  name: 'find-help',
  data() {
    return {
      styles: require('./styles.json')
    }
  }
}
</script>

<style scoped>
#find-help {
  position: relative;
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
