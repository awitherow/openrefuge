<template>
    <div class="header">
      <div class="container">
        <router-link exact to="/">
          <img src="static/logo.png" class="logo" alt="OpenRefuge logo" />
        </router-link>
        <nav>
          <ul class="site-links">
            <li v-for="item in linkList">
              <router-link exact :to="item.to">{{ item.text }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
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
          text: this.$t('elements.SiteHeader.linkList.get_involved'),
          to: '/get-involved'
        }
      ]
    }
  }
}
</script>

<style scoped>
.header {
  box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 9;
  height: 13vh;
  max-height: 80px;
  background: white;
}

.container {
  display: flex;
  align-items: center;
}
.logo {
  height: 30px;
  margin-right: 10px;
}

.site-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.site-links li {
  display: inline-block;
  padding: 0 8px;
  font-size: 14px;
}

.site-links li a {
  color: black;
  text-decoration: none;
}

.site-links li a:hover,
.site-links li a.router-link-active {
  color: #3fb618;
  text-decoration: underline;
}

@media(min-width: 425px) {
  .site-links li {
    font-size: 16px;
  }
}
</style>
