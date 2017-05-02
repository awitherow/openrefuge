<template>
  <transition name="fade">
    <div class="partner-overlay" v-if="visible">
      <button class="close" @click="toggle(undefined)">X</button>
      <div class="content">
        <h1>{{ partner.name }}</h1>
        <ul>
          <li v-for="t in partner.tags">{{t}}</li>
        </ul>
        <p>{{partner.description}}</p>
        <a :href="getMailTo(partner.email)">Contact</a>
        <a :href="partner.site">{{partner.site}}</a>
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
  padding: 32px 12px;
  background: rgba(255, 255, 255, 0.95);
  z-index: 12;
  overflow-y: scroll;
}

.partner-overlay h1 {
  font-size: 24px;
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
}
</style>
