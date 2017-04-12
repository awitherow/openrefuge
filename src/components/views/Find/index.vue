<template>
  <div id="find-help"
       class="container--full">

    <div class="WIP">
      <p>Currently a work in progress, stay tuned! Check out <a target="_blank"
           href="https://github.com/openrefuge/openrefuge">our github</a> if you wanna help with development ;)</p>
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
