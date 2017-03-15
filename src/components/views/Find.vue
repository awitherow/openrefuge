<template>
  <div id="find-help" class="container container--centered">
    <div>
      <p v-html="github" />
      <p v-html="getInvolved" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'find-help',
  data () {
    return {
      github: this.$t('views.find-help.paragraphs')[0],
      getInvolved: this.$t('views.find-help.paragraphs')[1]
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid black;
  padding: 10px;
  background: none;
  text-transform: uppercase;
  min-width: 100px;
  margin: 5px;
}
</style>
