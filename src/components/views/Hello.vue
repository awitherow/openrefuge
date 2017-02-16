<template>
  <div id="hello" class="container">
    <div class="centered">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <div class="button-container">
        <router-link class="button-link" to="/refugees">Seek help</router-link>
        <router-link class="button-link" to="/support">Provide support</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: () => ({
    title: 'Open Refuge',
    subtitle: 'Welcoming refugees with open arms'
  })
}
</script>

<style scoped>
.centered {
  text-align: center;
}

.button-link {
  border: 1px solid black;
  padding: 10px;
  background: none;
  text-transform: uppercase;
  min-width: 100px;
  margin: 5px;
  text-decoration: none;
  color: black;
  font-size: 12px;
}
</style>
