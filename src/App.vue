<template>
  <div id="app">
    <div class="background"></div>
    <site-header />
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <site-footer />
  </div>
</template>

<script>
import SiteHeader from './components/elements/SiteHeader'
import SiteFooter from './components/elements/SiteFooter'
export default {
  name: 'app',
  components: {
    'site-header': SiteHeader,
    'site-footer': SiteFooter
  }
}
</script>

<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.background {
  background: url(../static/help.jpg) no-repeat center center;
  background-size: cover;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}

.background:after {
  background-image: linear-gradient(to bottom right,#fff,#fff);
  content: '';
  position: inherit;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: .9;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 74vh;
  padding-top: 100px;
  padding-bottom: 150px;
}

.container {
  height: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 15px;
}

.container--centered {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
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
