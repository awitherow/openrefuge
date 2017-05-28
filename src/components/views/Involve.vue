<template>
  <div id="involvement">
    <!-- HEADLINE -->
    <div class="section section__vertical">
      <header>
        <h1>Outside, Looking In</h1>
        <h2>Experiences on the effects of the refugee crisis</h2>

        <hr class="dashed" />
      </header>
      <img src="static/involve/savage.jpg" />
      <div class="article">
        <h3>Savaged Conscience</h3>
        <h4>An outsider looks in on the refugee crisis, and into his own soul...</h4>
        <h5>At once raw and refined are our creations. We can polish ourselves, our cities and our cultures, but deep down we are still only human. Savage forces of nature. We possess the capacity, above all other living things, to chisel beauty out of life. Likewise, we are gods of destruction and malice... </h5>
        <div class="button-container">
          <a href="https://savagedconscience.wordpress.com/2017/02/19/syrian-refuge-crisis-part-1/" class="button green">Read the four part series</a>
        </div>
        <hr class="dashed" />
        <h3>Other articles</h3>
        <ul>
          <li>
            <a href="https://medium.com/openrefuge/hope-for-the-children-of-war-e8a487308248">Hope for the Children of War</a>
          </li>
          <li>
            <a href="https://medium.com/@TulsiGabbard/the-syrian-people-desperately-want-peace-e308f1777a34">The Syrian People Desperately Want Peace</a>
          </li>
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

.section {
  display: flex;
}

.section__horizontal {
  flex-direction: row;
}

.section__vertical {
  flex-direction: column;
}

.section h1 {
  font-size: 24px;
  margin: 24px 0 0 0;
}

.section h2 {
  font-size: 16px;
  margin: 0 0 8px 0;
}

.section img {
  max-width: 100vw;
}

.article,
.section header {
  padding: 0 16px;
}

.article h3,
.article h4 {
  margin-bottom: 4px;
}

.article h4,
.article h5 {
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
