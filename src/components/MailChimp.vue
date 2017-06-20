<template>
  <form action="//openrefuge.us16.list-manage.com/subscribe/post?u=31da9e5a80639b5a6552ec25a&amp;id=bb0c737d13" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <h2>Subscribe to our mailing list</h2>
    <h3>Keep up to date with projects and ways to get involved in your area!</h3>
    <div id="mc_embed_signup_scroll">
      <div class="field-group">
        <label for="mce-EMAIL">Email:
        </label>
        <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
      </div>
      <div style="position: absolute; left: -5000px;" aria-hidden="true">
        <input type="text" name="b_31da9e5a80639b5a6552ec25a_bb0c737d13" tabindex="-1" value="">
      </div>
      <div class="clear">
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button white">
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'MailChimp',
  data() {
    return {
      visible: true,
    }
  }
}
</script>

<style scoped>
#mc-embedded-subscribe-form {
  padding: 0 10px;
}

h2,
h3,
#mc_embed_signup_scroll {

  text-align: center;
}

h2 {
  margin: 0;
  margin-top: 10px;
}

h3 {
  margin: 0 auto 10px auto;
  font-size: 14px;
}

#mc_embed_signup_scroll {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

#mce-EMAIL {
  height: 32px;
  padding: 5px;
  min-width: 200px;
  font-size: 16px;
}
</style>
