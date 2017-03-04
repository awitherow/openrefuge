<template>
  <div id="find-help" class="container centered">
    <div>
      <p v-html="github" />
      <p v-html="takeAction" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'find-help',
  data () {
    return {
      github: this.$t('views.find-help.paragraphs')[0],
      takeAction: this.$t('views.find-help.paragraphs')[1]
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
