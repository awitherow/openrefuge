<template>
  <div id="refugees" class="container">
    <div v-for="item in infoBoxes">
      {{ item.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: () => ({
    infoBoxes: [
      {
        text: 'Local'
      },
      {
        text: 'Online'
      },
      {
        text: 'Suggest'
      }
    ]
  })
}
</script>

<style scoped>
.centered {
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
