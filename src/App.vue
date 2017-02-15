<template>
  <div id="app">
    <SiteHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import SiteHeader from './components/elements/SiteHeader'
export default {
  name: 'app',
  components: {
    SiteHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  max-width: 900px;
  margin: 0 auto;
}
</style>
