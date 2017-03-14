<template>
  <div id="about" class="container">
    <h1>Our Mission</h1>
    <div class="mission">
      <p v-for="paragraph in paragraphs" v-html="paragraph" />
    </div>

    <h1>Meet the staff</h1>
    <h2>Team Athens, Greece</h2>
    <div class="workers">
      <div v-for="greekers in greeceTeam" class="worker">
        <img :src="greekers.photo" />
        <h3>{{ greekers.name }}</h3>
        <p>{{ greekers.description }}</p>
      </div>
    </div>
    <h2>Team Hamburg, Germany</h2>
    <div class="workers">
      <div v-for="hamburgers in hamburgTeam" class="worker">
        <img :src="hamburgers.photo" />
        <h3>{{ hamburgers.name }}</h3>
        <p>{{ hamburgers.description }}</p>
      </div>
    </div>
    <h2>Administraton</h2>
    <div class="workers">
      <div v-for="admin in admins" class="worker">
        <img :src="admin.photo" />
        <h3>{{ admin.name }}</h3>
        <p v-html="admin.description" />
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
      admins: [
        {
          photo: 'static/austin.jpg',
          name: 'Austin',
          description: 'Technical lead for development and planning at OpenRefuge, as well as Project Manager for our entire cause.'
        },
        {
          photo: 'static/jeff-skittles.jpg',
          name: 'Jeff',
          description: 'Mission leader at OpenRefuge, inviting and inspiring people to help join hands to make the world a better place.'
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
      ],
      greeceTeam: [
        {
          photo: 'static/moha.jpg',
          name: 'Moha',
          description: 'A refugee from Syria who studied English Literature in Syria, works now in Athens at Médecins Sans Frontières (Doctors Without Borders), and also volunteers in the refugee squats, as well as in Port Periaus.'
        }
      ],
      hamburgTeam: [
        {
          photo: 'static/maja.jpg',
          name: 'Maja',
          description: 'Works directly with refugees in the community of Hamburg, assisting with cultural integration.'
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
}

.worker {
  margin: 15px;
  max-width: 300px;
}

.worker img {
  border-radius: 100px;
  height: 200px;
  width: 200px;
}

h2 {
  text-align: center;
}

.worker p {
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

  .workers {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
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
    max-width: 1000px;
  }

  .workers {
    flex-direction: row;
  }

  .worker {
    margin: 25px;
    max-width: 350px;
  }

  .worker img {
    border-radius: 125px;
    height: 250px;
    width: 250px;
  }
}
</style>
