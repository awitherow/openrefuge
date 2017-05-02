<template>
  <transition name="fade">
    <div class="partner-overlay" v-if="visible">
      <button class="close" @click="toggle(undefined)">X</button>
      <div class="headline">
        <h1>{{ partner.name }}</h1>
        <ul>
          <li v-for="t in partner.tags">{{t}}</li>
        </ul>
      </div>
      <div class="inner">
        <h2>About:</h2>
        <p>{{partner.description}}</p>
      </div>
      <div class="button-container">
        <a class="button" :href="getMailTo(partner.email)">Contact</a>
        <a class="button" :href="partner.site">Website</a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'partner',
  props: ['partnerId', 'visible', 'toggle'],
  data() {
    return {
      partners: [{
        id: 'DE01',
        name: 'Diakonie-Hilfswerk Hamburg',
        description: 'Im Mai 2015 startete das Diakonische Hilfswerk das Projekt Flüchtlingslotsen. Das Projekt unterstützt durch geschulte ehrenamtlich Tätige nach Hamburg geflüchtete und migrierte Menschen. Die Lotsen begleiten Hilfesuchende zu Ämtern- und Behörden und anderen Einrichtungen. Auch längerfristige Unterstützung in Form von Patenschaften für Geflüchtete wird vermittelt. Zur Unterstützung der ehrenamtlichen Arbeit von Lotsinnen und Lotsen bietet das Projekt monatlich entweder Fortbildungen zu relevanten Themen oder es finden Treffen zum Austausch mit kollegialer Fallberatung statt.',
        tags: ['volunteer'],
        contact: 'Fluechtlingslotsen@diakonie-hamburg.de',
        site: 'diakonie-hamburg.de',
      }]
    }
  },
  methods: {
    getMailTo(email) {
      return `mailto:${email}`
    }
  },
  computed: {
    partner() {
      return this.partners.filter(p => p.id === this.partnerId)[0]
    }
  }
}
</script>

<style scoped>
.partner-overlay {
  position: absolute;
  top: 24px;
  bottom: 24px;
  right: 24px;
  left: 24px;
  background: rgba(255, 255, 255, 0.95);
  z-index: 12;
  overflow-y: scroll;
}

.partner-overlay .close {
  position: absolute;
  top: 12px;
  right: 12px;
  border: none;
  font-size: 24px;
  background: none;
  font-weight: 100;
  transform: scale(1.25, 1.0);
  color: rgba(255, 255, 255, 0.95);
}

.inner,
.headline {
  padding: 12px;
}

.partner-overlay .headline {
  height: 200px;
  color: white;
  flex-direction: column;
  justify-content: flex-end;
}

.partner-overlay .headline,
.partner-overlay .button-container {
  display: flex;
  background: #3fb618;
}

.partner-overlay li {
  border-color: rgba(255, 255, 255, 0.75);
}

.partner-overlay h1,
.partner-overlay h2 {
  font-weight: 300;
}

.partner-overlay h1 {
  font-size: 24px;
  margin: 0;
  max-width: 90%;
}

.partner-overlay h2 {
  font-size: 16px;
}

.partner-overlay ul {
  padding: 0;
  list-style: none;
  margin: 4px 0;
}

.partner-overlay li,
.partner-overlay p {
  font-size: 14px;
}

.partner-overlay li {
  display: inline-block;
  padding: 4px 6px;
}

.partner-overlay li,
.partner-overlay .button {
  border: 1px solid;
}

.partner-overlay p {
  line-height: 24px;
}

.partner-overlay .button-container {
  justify-content: space-around;
  align-items: center;
  min-height: 80px;
}

.partner-overlay .button {
  text-transform: uppercase;
  color: white;
  text-decoration: none;
  padding: 6px 8px;
  min-width: 100px;
  text-align: center;
  border-color: rgba(255, 255, 255, 0.85);
}
</style>
