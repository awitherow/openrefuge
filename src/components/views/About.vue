<template>
  <div id="about" class="container">
    <h1>Our Mission</h1>
    <div class="mission">
      <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
    </div>

    <h1>Meet the staff</h1>
    <div class="workers">
      <div v-for="worker in workers" class="worker">
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
          photo: 'http://i.imgur.com/DC4nEAQ.jpg',
          name: 'Austin',
          description: 'Technical lead for development and planning at OpenRefuge, as well as Project Manager for our entire cause.'
        },
        {
          photo: 'http://i.imgur.com/bW8aGkc.jpg',
          name: 'Jeff',
          description: 'Mission leader at OpenRefuge, inviting and inspiring people to help join hands to make the world a better place'
        },
        {
          photo: 'http://i.imgur.com/FxzSDb0.jpg',
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

.workers {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.worker {
  margin: 25px;
}

.worker img {
  border-radius: 125px;
  height: 250px;
  width: 250px;
}

.worker h2 {
  text-align: center;
}

.worker p {
  text-align: left;
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

  .workers {
    flex-direction: row;
    align-items: flex-start;
  }

  .worker img {
    border-radius: 87.5px;
    height: 175px;
    width: 175px;
  }
}

@media(min-width: 1024px) {
  #about {
    padding-top: 0;
  }

  .workers {
    flex-direction: row;
  }

  .worker img {
    border-radius: 125px;
    height: 250px;
    width: 250px;
  }
}
</style>
