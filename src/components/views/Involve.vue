<template>
  <div id="involvement">
    <!-- HEADLINE -->
    <div class="jumbotron section section__vertical">
      <img src="http://placekitten.com/g/500/500" />
      <div class="article">
        <h2>A gripping article title</h2>
        <h3>And its equally gripping subtitle</h3>
        <h4>A lot of emotionally powerful content that makes the user have no choice but to click on the button below.</h4>
        <div class="button-container">
          <a class="button green">Click me!</a>
        </div>
        <hr class="dashed" />
        <h3>Other articles</h3>
        <ul>
          <li>a click bait link</li>
          <li>a click bait link</li>
          <li>a click bait link</li>
        </ul>
      </div>
    </div>
    <!-- /HEADLINE -->
  </div>
</template>

<script>
export default {
  name: 'involve',
  data() {
    return {}
  }
}
</script>

<style scoped>
#involvement {
  text-align: justify;
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
    padding-top: 0;
  }
}

.jumbotron {
  min-height: 100vh;
}

.section {
  display: flex;
}

.section__horizontal {
  flex-direction: row;
}

.section__vertical {
  flex-direction: column;
}

img {
  max-width: 100vw;
}

.article {
  padding: 0 16px;
}

.article h2,
.article h3 {
  margin-bottom: 4px;
}

.article h3,
.article h4 {
  margin-top: 4px;
}

.article h4 {
  color: darkgreen;
}

.button-container {
  min-height: 38px;
}

.button {
  border: 1px solid #444;
  padding: 10px;
  background: none;
  text-transform: uppercase;
  min-width: 100px;
  text-decoration: none;
  color: #444;
  font-size: 12px;
}

.button.green {
  border-color: #0C8300;
  background: #3fb618;
  color: white;
}

ul {
  margin: 4px 0;
}

body {
  background-color: #f0f0f0;
  width: 700px;
  float: center;
}

hr.dashed {
  border-top: 1px dashed #8c8b8b;
}
</style>
