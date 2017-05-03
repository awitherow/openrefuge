<template>
  <transition name="fade">
    <div :class="['partner-overlay', partner.colorClass]" v-if="visible">
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
        <a class="button main" :href="getMailTo(partner.email)">Contact</a>
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
        site: 'http://www.diakonie-hamburg.de',
        colorClass: "purple"
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
  top: 12px;
  bottom: 12px;
  right: 12px;
  left: 12px;
  background: rgba(255, 255, 255, 0.95);
  z-index: 12;
  overflow-y: scroll;
  max-width: 768px;
  margin: 0 auto;
}

@media(min-width: 768px) {
  .partner-overlay {
    right: 20%;
    left: 20%;
    bottom: 10%;
  }
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
  background: #3fb618;
  height: 200px;
  color: white;
  flex-direction: column;
  justify-content: flex-end;
}

.partner-overlay.purple .headline,
.partner-overlay.purple .button.main {
  background: purple;
}

.partner-overlay.purple .button.main {
  border-color: purple;
}

.partner-overlay .headline,
.partner-overlay .button-container {
  display: flex;
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
  padding-bottom: 24px;
}

.button {
  border: 1px solid #444;
  padding: 10px;
  background: none;
  text-transform: uppercase;
  min-width: 100px;
  text-decoration: none;
  color: #444;
  font-size: 12px;
  text-align: center;
}

.button.main {
  border-color: #0C8300;
  background: #3fb618;
  color: white;
}
</style>
