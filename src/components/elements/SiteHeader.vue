<template>
    <header>
      <div class="logo-container">
        <div class="logo">^</div>
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
          text: this.$t('elements.SiteHeader.linkList.about'),
          to: '/about'
        },
        {
          text: this.$t('elements.SiteHeader.linkList.find_help'),
          to: '/find-help'
        },
        {
          text: this.$t('elements.SiteHeader.linkList.take_action'),
          to: '/take-action'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9;
  display: flex;
  align-items: center;
  max-height: 80px;
  height: 13vh;
  padding: 0 15px;
  background: white;
}

.logo-container {
  min-width: 50px;
  margin-right: 15px;
}

.logo {
  height: 60px;
  width: 60px;
  font-size: 60px;
  display: flex;
  justify-content: center;
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
  color: #3fb618;
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
