<template>
  <header>
    <ul class="site-links">
      <li v-for="item in linkList">
        <router-link :to="item.to">{{ item.text }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data () {
    return {
      linkList: [
        {
          text: this.$t('elements.SiteHeader.linkList.home'),
          to: '/'
        },
        {
          text: this.$t('elements.SiteHeader.linkList.refugees'),
          to: '/refugees'
        },
        {
          text: this.$t('elements.SiteHeader.linkList.supporters'),
          to: '/supporters'
        },
        {
          text: this.$t('elements.SiteHeader.linkList.about'),
          to: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  position: absolute;
  z-index: 9;
}

.site-links {
  list-style: none;
  padding: 0 25px;
}

.site-links li {
  display: inline-block;
  padding: 0 8px;
}
</style>
