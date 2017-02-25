<template>
  <header>
    <div class="logo-container">
      <div class="logo"></div>
    </div>
    <ul class="site-links">
      <li v-for="item in linkList">
        <router-link exact :to="item.to">{{ item.text }}</router-link>
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
  display: flex;
  align-items: center;
  padding: 25px;
  background: white;
  width: 100vw;
}

.logo-container {
  min-width: 50px;
  margin-right: 25px;
}

.logo {
  height: 60px;
  width: 60px;
  background: black;
}

.site-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.site-links li {
  display: inline-block;
  padding: 0 8px;
}

.site-links li a {
  color: black;
  text-decoration: none;
}

.site-links li a.router-link-active {
  color: green;
  text-decoration: underline;
}

@media(max-width: 425px) {
  header {
    padding: 15px;
  }

  .site-links li a {
    font-size: 14px;
  }
}
</style>
