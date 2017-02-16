<template>
  <div id="refugees" class="container">
    <ul>
      <li v-for="section in sections">
        <router-link :to="section.to">{{ section.text }}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'refugees',
  data () {
    return {
      sections: [
        {
          text: this.$t('views.refugees.links.local'),
          to: 'refugees/local'
        },
        {
          text: this.$t('views.refugees.links.online'),
          to: 'refugees/online'
        },
        {
          text: this.$t('views.refugees.links.help'),
          to: 'refugees/help'
        }
      ]
    }
  }
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
