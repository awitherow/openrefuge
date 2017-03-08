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

@media(min-width: 375px) {
  #about {
    padding-top: 65px;
  }
}

@media(min-width: 425px) {
  #about {
    padding-top: 40px;
  }
}

@media(min-width: 768px) {
  #about {
    padding-top: 0;
  }
}
</style>
