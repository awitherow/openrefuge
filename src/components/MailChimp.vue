<template>
  <div class="mailchimp">
    <button @click="toggle">CLOSE</button>
    <form action="//openrefuge.us16.list-manage.com/subscribe/post?u=31da9e5a80639b5a6552ec25a&amp;id=bb0c737d13" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <h2>Subscribe to our Mailing List</h2>
      <h3>Keep up to date with projects and ways to get involved in your area!</h3>
      <div id="mc_embed_signup_scroll">
        <input type="email" placeholder="Email" value="" name="EMAIL" id="mce-EMAIL">
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_31da9e5a80639b5a6552ec25a_bb0c737d13" tabindex="-1" value="">
        </div>
        <input type="submit" value="Join" name="subscribe" id="mc-embedded-subscribe" class="button white">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'MailChimp',
  props: ['toggle']
}
</script>

<style scoped>
.mailchimp {
  padding-bottom: 12px;
  position: relative;
}

h2,
h3 {
  margin: 0;
}

h2 {
  margin-top: 16px;
  margin-bottom: 8px;
}

h3 {
  margin-bottom: 8px;
}

button {
  position: absolute;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: white;
}

#mc-embedded-subscribe-form {
  padding: 0 10px;
  margin: 0 auto;
  max-width: 425px;
}

h2,
h3,
#mc_embed_signup_scroll {
  text-align: center;
}

#mc_embed_signup_scroll {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

#mce-EMAIL {
  height: 32px;
  padding: 5px;
  font-size: 16px;
  width: 250px;
}

@media(max-width: 425px) {
  h2,
  h3 {
    font-size: 90%;
  }

  #mc_embed_signup_scroll {
    display: flex;
  }

  #mc-embedded-subscribe {
    align-self: flex-end;
  }

  #mce-EMAIL {
    width: 175px;
    font-size: 90%;
  }
}
</style>
