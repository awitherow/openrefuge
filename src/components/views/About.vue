<template>
  <div id="about" class="container">
    <h1>Our Mission</h1>
    <div class="mission">
      <p v-for="paragraph in paragraphs">{{ paragraph }}</p>
    </div>

    <h1>Meet the staff</h1>
    <h2>Administraton</h2>
    <div class="workers">
      <div v-for="admin in admins" class="worker">
        <img :src="admin.photo" />
        <h2>{{ admin.name }}</h2>
        <p>{{ admin.description }}</p>
      </div>
    </div>
    <h2>Team Athens, Greece</h2>
    <div class="workers">
      <div v-for="greekers in greeceTeam" class="worker">
        <img :src="greekers.photo" />
        <h2>{{ greekers.name }}</h2>
        <p>{{ greekers.description }}</p>
      </div>
    </div>
    <h2>Team Hamburg, Germany</h2>
    <div class="workers">
      <div v-for="hamburgers in hamburgTeam" class="worker">
        <img :src="hamburgers.photo" />
        <h2>{{ hamburgers.name }}</h2>
        <p>{{ hamburgers.description }}</p>
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
      admins: [
        {
          photo: 'http://i.imgur.com/T9C2WEJ.jpg',
          name: 'Austin',
          description: 'Technical lead for development and planning at OpenRefuge, as well as Project Manager for our entire cause.'
        },
        {
          photo: 'http://i.imgur.com/luKz0jq.jpg',
          name: 'Jeff',
          description: 'Mission leader at OpenRefuge, inviting and inspiring people to help join hands to make the world a better place'
        },
        {
          photo: 'http://i.imgur.com/cURePXv.jpg',
          name: 'Adam',
          description: 'Philosopher and writer at OpenRefuge who also helps with business management.'
        }
      ],
      greeceTeam: [
        {
          photo: 'http://i.imgur.com/bK2o0mw.jpg',
          name: 'Moha',
          description: 'A refugee from Syria pursuing his doctorate in Law, working within the refugee and migrant community in Athens.'
        },
        {
          photo: 'http://i.imgur.com/leGPG4Q.jpg',
          name: 'Rita',
          description: 'Helps in social support, case study, and providing clothing, food distribution and shelter for unofficial and homeless refugees.'
        }
      ],
      hamburgTeam: [
        {
          photo: 'http://i.imgur.com/pNtRO0g.jpg',
          name: 'Maja',
          description: 'Works directly with refugees in the community of Hamburg, assisting them with cultural integration.'
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
