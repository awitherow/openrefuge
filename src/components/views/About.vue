<template>
  <div id="about" class="container">
    <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      paragraphs: this.$t('views.about.paragraphs')
    }
  }
}
</script>

<style scoped>
#about {
  text-align: justify;
}
</style>
