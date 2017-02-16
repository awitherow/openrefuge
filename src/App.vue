<template>
  <div id="app">
    <SiteHeader />
    <transition name="fade">
      <router-view></router-view>
    </transition>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
