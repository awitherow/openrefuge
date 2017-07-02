<template>
  <div class="header">
    <div class="container">
      <router-link exact to="/">
        <img src="static/logo.png" class="logo" alt="OpenRefuge logo"></img>
      </router-link>
      <nav>
        <ul class="site-links">
          <li v-bind:key="item.to" v-for="item in linkList">
            <router-link exact :to="item.to">{{ item.text }}</router-link>
          </li>
        </ul>
        <ul class="social-media">
          <li v-bind:key="media.to" v-for="media in socialMediaSites">
            <a :href="media.to" target="_blank">
              <i :class="getIcon(media.site)" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      socialMediaSites: [
        {
          site: 'medium',
          to: 'https://medium.com/openrefuge'
        },
        {
          site: 'facebook',
          to: 'https://www.facebook.com/OpenRefuge/'
        },
        {
          site: 'instagram',
          to: 'https://www.instagram.com/openrefuge/'
        },
        {
          site: 'twitter',
          to: 'https://twitter.com/openrefuge'
        }
      ],
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
  },
  methods: {
    getIcon(icon) {
      return `fa fa-${icon}`
    }
  }
}
</script>

<style scoped>
.header {
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.1);
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
  height: 64px;
  margin-right: 10px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li {
  display: inline-block;
  padding: 0 8px;
  font-size: 14px;
}

ul li a {
  color: black;
  text-decoration: none;
}

.site-links li a:hover,
.site-links li a.router-link-active {
  color: #3fb618;
  text-decoration: underline;
}

.social-media {
  display: none;
}

@media(min-width: 425px) {
  .site-links li {
    font-size: 16px;
  }
}

@media(min-width: 768px) {
  nav {
    display: flex;
    width: 100%;
  }

  .site-links {
    margin-right: auto;
  }

  .social-media {
    display: block;
  }

  .social-media a {
    color: #3da13e;
    font-size: 16px;
  }

  .social-media a:hover {
    color: #8fcee4;
  }
}
</style>
