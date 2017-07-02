<template>
  <div id="involvement" class="container">
    <div class="involvement-item">
      <h2>From our Blog</h2>
      <p>Below are some great articles that highlight the issues occuring in Syria and the Middle East, the origin of the refugee crisis and how it affects Greece, Europe and the World.</p>

      <transition name="fade">
        <div v-if="!loading" class="articles">
          <div class="article" v-bind:key="article.pubDate" v-for="article in articles">
            <h3>{{ article.title }}</h3>
            <h4>
              <strong>{{ article.author }}</strong> on {{ transformDate(article.pubDate) }}</h4>
            <div class="description" v-html="article.description" />
            <div class="link-float-right">
              <a class="link" target="_blank" :href="article.link">Read the full post</a>
            </div>
            <hr />
          </div>
        </div>
      </transition>

      <h3>
        Read the rest of our articles
        <a href="https://medium.com/openrefuge/">on our Blog</a>.
      </h3>

    </div>
    <div class="involvement-item">
      <h2>Join a Mission</h2>
      <p>We are actively visiting Greece to connect with organizations on the ground both to assist them through OpenRefuge and to provide first hand experience to those who come with us.</p>
      <p>If you are interested, check the links below.</p>
      <ul>
        <li>
          <a target="_blank" href="https://medium.com/@jeffsaferite/hey-friends-3de36842c17c#.itgp4yjfv">Hey Friends!</a>
        </li>
        <li>
          <a target="_blank" href="https://medium.com/@jeffsaferite/662843af5c8e">Adventure Guidelines.</a> Next: September 22-29, 2017.</li>
        <li>
          <a target="_blank" href="https://goo.gl/forms/38GU10tYVbXZsevh2">Sign up now!</a>
        </li>
      </ul>
    </div>
    <div class="involvement-item">
      <h2>Keep Up to Date</h2>
      <p>To help spread the word about OpenRefuge, we are taking an active stance to keep you updated through all of the most popular social media outlets, so we can help serve you.</p>
      <ul>
        <li>
          <a target="_blank" href="https://medium.com/openrefuge">Medium</a>, an open blogging platform.</li>
        <li>
          <a target="_blank" href="https://www.patreon.com/openrefuge">Patreon</a>, our donation platform.</li>
        <li>
          <a target="_blank" href="https://twitter.com/openrefuge">Twitter</a>
        </li>
        <li>
          <a target="_blank" href="https://www.facebook.com/OpenRefugeOrg/">Facebook</a>
        </li>
        <li>
          <a target="_blank" href="https://www.instagram.com/openrefuge/">Instagram</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import moment from 'moment'

function getArticlesFromMedium(cb) {
  $.get("https://medium.com/feed/openrefuge?truncated=true", function (data) {
    const $xml = $(data)
    let articles = []
    $xml.find("item").each(function () {
      const $this = $(this)
      const article = {
        title: $this.find("title").text(),
        pubDate: $this.find("pubDate").text(),
        author: $this.find("creator").text(),
        description: $this.find("description").text(),
        link: $this.find("link").text()
      }
      articles.push(article)
    });
    cb(articles)
  });
}

export default {
  name: 'hello',
  data: function () {
    return {
      loading: true,
      articles: null
    }
  },
  created() {
    this.getArticles()
  },
  methods: {
    getArticles() {
      getArticlesFromMedium((articles) => {
        const MAX_ARTICLES = 4
        this.articles = articles.slice(0, MAX_ARTICLES)
        this.loading = false
      })
    },
    transformDate: (date) => moment(date).format('MMMM Do YYYY')
  }
}
</script>

<style>
#involvement {
  text-align: justify;
}

.article {
  text-align: left;
}

.article h3 {
  margin-bottom: 0;
}

.article h4 {
  margin-top: 4px;
  font-weight: 300;
  font-size: 14px;
}

.article hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid lightgray;
  margin: 1em 0;
  padding: 0;
}

.medium-feed-image img {
  width: 90vw;
}

.medium-feed-link {
  display: none;
}

@media(min-width: 375px) {
  #involvement {
    padding-top: 65px;
  }
}

@media(min-width: 425px) {
  #involvement {
    padding-top: 40px;
  }
}

@media(min-width: 768px) {
  #involvement {
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 0;
  }

  .medium-feed-image img {
    width: 690px;
  }
}

@media(min-width: 768px) {
  #involvement {
    padding-left: 48px;
    padding-right: 48px;
    padding-top: 0;
  }

  .medium-feed-item {
    display: flex;
  }

  .medium-feed-image {
    margin: 0;
  }

  .medium-feed-image img {
    width: 350px;
    margin-right: 16px;
  }

  .medium-feed-snippet {
    max-height: 75px;
    margin: 0;
    padding: 0;
  }

  .article {
    position: relative;
    margin-bottom: 32px;
    margin: 0 auto;
  }

  .article .link-float-right {
    display: flex;
    justify-content: flex-end;
    margin-top: -32px;
  }

  .article .link {
    text-align: right;
    width: 100%;
  }
}
</style>
