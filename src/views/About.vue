<template>
  <div id="about" class="container">
    <h1>Our Mission</h1>
    <div class="mission">
      <p v-for="paragraph in paragraphs" v-html="paragraph" />
    </div>

    <h1>Active Contributors</h1>
    <p>All the work we do is from our heart. We make truly make no profit here at OpenRefuge, all we do is done in our spare time. We are here to help bring peace to the Refugee Crisis. Anyone is free to join in any way. Just simply
      <a href="mailto:contactopenrefuge@gmail.com?Subject=I%20want%20to%20help.">write us an email</a> with how you would like to help out!</p>
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
          description: 'That introverted computer guy, possibly crazy.'
        },
        {
          photo: 'static/kim.jpg',
          name: 'Kim',
          description: 'Kim is just a girl, standing in front of a volunteer-based humanitarian organisation, helping it update its Facebook status.'
        },
        {
          photo: 'static/adrian.jpg',
          name: 'Adrian',
          description: 'Adrian is a super talented developer who helps out when he can to make sure the design of the site is nice and pretty, ensures accessibility for all kinds of web users, and is a <a href="https://www.patreon.com/adrianpayne">wonderful singer</a>!'
        },
        {
          photo: 'static/joniel.png',
          name: 'Joniel',
          description: 'Joniel is one of the most talented artists I have met, and we are lucky to have him guiding the vision of our brand and providing upcoming visual and user experience support!'
        },
        {
          photo: 'static/adam.jpg',
          name: 'Adam',
          description: 'Voice of his generation, most influential unpublished author EVER. Writes at OpenRefuge who also helps with business management. Is also at least 5% fluent in Spanish, has deep blue eyes and lawyer friends.'
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
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
