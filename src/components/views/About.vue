<template>
  <div id="about" class="container">
    <h1>Our Mission</h1>
    <div class="mission">
      <p v-for="paragraph in paragraphs" v-html="paragraph" />
    </div>

    <h1>OpenRefuge Contributors</h1>
    <div class="people">
      <div v-for="person in people" class="person">
        <img :src="person.photo" />
        <h3>{{ person.name }}</h3>
        <p v-html="person.description" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      paragraphs: this.$t('views.about.paragraphs'),
      people: [
        {
          photo: 'static/moha.jpg',
          name: 'Moha',
          description: 'A refugee from Syria who studied English Literature in Syria, works now in Athens at Médecins Sans Frontières (Doctors Without Borders), and also volunteers in the refugee squats, as well as in Port Periaus.'
        },
        {
          photo: 'static/maja.jpg',
          name: 'Maja',
          description: 'Works directly with refugees in the community of Hamburg, assisting with cultural integration.'
        },
        {
          photo: 'static/jeff-skittles.jpg',
          name: 'Jeff',
          description: 'Mission leader at OpenRefuge, inviting and inspiring people to help join hands to make the world a better place.'
        },
        {
          photo: 'static/austin.jpg',
          name: 'Austin',
          description: 'Technical lead for development and planning at OpenRefuge, as well as Project Manager for our entire cause.'
        },
        {
          photo: 'static/adam.jpg',
          name: 'Adam',
          description: 'Voice of his generation, most influential unpublished author EVER. Writes at OpenRefuge who also helps with business management. Is also at least 5% fluent in Spanish, has deep blue eyes and lawyer friends.'
        },
        {
          photo: 'static/placeholder-person.png',
          name: 'Social Media Expert',
          description: 'We are interested in someone who is a social media expert to do part time work weekly to help lead our social campaigns. <a href="mailto:contactopenrefuge@gmail.com?Subject=Social%20Media%20Application%20help." target="_top">Send us an email application</a>!'
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

.people {
  display: flex;
}

.person {
  margin: 15px;
  max-width: 300px;
}

.person img {
  border-radius: 100px;
  height: 200px;
  width: 200px;
}

h2 {
  text-align: center;
}

.person p {
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

  .people {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .person img {
    border-radius: 87.5px;
    height: 175px;
    width: 175px;
  }
}

@media(min-width: 1024px) {
  #about {
    padding-top: 0;
    max-width: 1000px;
  }

  .people {
    flex-direction: row;
  }

  .person {
    margin: 25px;
    max-width: 250px;
  }

  .person img {
    border-radius: 100px;
    height: 200px;
    width: 200px;
  }
}
</style>
