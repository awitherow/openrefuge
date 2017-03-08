<template>
  <div id="about" class="container">
    <div class="mission">
      <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
    </div>
    <div class="workers">
      <div v-for="worker in workers">
        <img :src="worker.photo" />
        <h2>{{ worker.name }}</h2>
        <p>{{ worker.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      paragraphs: this.$t('views.about.paragraphs'),
      workers: [
        {
          photo: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=500&h=500',
          name: 'Austin',
          description: 'Technical "executive" for OpenRefuge, as well as Project Manager for our entire cause.'
        },
        {
          photo: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=500&h=500',
          name: 'Jeff',
          description: 'Mission leader for OpenRefuge, inviting and inspiring people to help join hands to make the world a better place'
        },
        {
          photo: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=500&h=500',
          name: 'Adam',
          description: 'Philosopher and writer at OpenRefuge who also helps with business management.'
        }
      ]
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
