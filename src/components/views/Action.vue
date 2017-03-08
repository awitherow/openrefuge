<template>
  <div id="action" class="container">
    <div class="action-item">
      <h2>Learn</h2>
      <p>Below are some great articles that highlight the issues occuring in Syria and the Middle East, the origin of the refugee crisis and how it affects Greece, Europe and the World.</p>
      <ul>
        <li><a href="https://savagedconscience.wordpress.com/">Savaged Conscience</a>, reflections on the Refugee Crisis and its impact on a savaged conscience.</li>
        <li><a href="https://medium.com/openrefuge/hope-for-the-children-of-war-e8a487308248">Hope for the Children of War</a>, another account of the side effects of greed for oil.</li>
        <li><a href="https://medium.com/@TulsiGabbard/the-syrian-people-desperately-want-peace-e308f1777a34#.hg4v7j3ck">The Syrian People Desparately Want Peace</a>, House of Representatives Tulsi Gabbard reflects on her visit to Syria.</li>
      </ul>
    </div>
    <div class="action-item">
      <h2>Join a Mission</h2>
      <p>We are actively visiting Greece to connect with organizations on the ground both to assist them through OpenRefuge and to provide first hand experience to those who come with us.</p>
      <p>If you are interested, select the mission you are interetsted in below, or send us a general inquiery!</p>
    </div>
    <div class="action-item">
      <h2>Keep Up to Date</h2>
      <p>To help spread the word about OpenRefuge, we are taking an active stance to keep you updated through all of the most popular social media outlets, so we can help serve you.</p>
      <ul>
        <li><a href="https://medium.com/openrefuge">Medium</a>, an open blogging platform.</li>
        <li><a href="https://www.patreon.com/openrefuge">Patreon</a>, our donation platform.</li>
        <li><a href="https://twitter.com/openrefuge">Twitter</a></li>
        <li><a href="https://www.facebook.com/groups/openrefuge/">Facebook</a></li>
        <li><a href="https://www.instagram.com/openrefuge/">Instagram</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {}
  }
}
</script>

<style scoped>
#action {
  text-align: justify;
}

@media(min-width: 375px) {
  #action {
    padding-top: 65px;
  }
}

@media(min-width: 425px) {
  #action {
    padding-top: 40px;
  }
}

@media(min-width: 768px) {
  #action {
    padding-top: 0;
  }
}
</style>
