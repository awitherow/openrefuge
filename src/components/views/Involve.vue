<template>
  <div id="involvement">
    <!-- HEADLINE -->
    <div class="section section__vertical">
      <header>
        <h1>Peek Beyond The Veil</h1>
        <hr class="dashed small" />
        <h2>Experiences on the effects of the refugee crisis</h2>
      </header>
      <div class="content">
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
  margin: 0 auto;
  padding-bottom: 36px;
}

.section {
  display: flex;
  padding-top: 24px;
}

.section__horizontal {
  flex-direction: row;
}

.section__vertical {
  flex-direction: column;
}

.section h1 {
  margin-top: 0;
  margin-bottom: 0;
}

.section h2 {
  margin: 0 0 8px 0;
}

.article,
.section header {
  padding: 0 16px;
}

.section header {
  text-align: center;
  margin-bottom: 24px;
}

.section header,
.section img {
  margin-bottom: 24px;
  width: 100%;
}

.article h3,
.article h4 {
  margin-bottom: 4px;
  margin-top: 4px;
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
  margin-bottom: 16px;
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
  margin: 8px 0;
}

body {
  background-color: #f0f0f0;
  width: 700px;
  float: center;
}

ul {
  margin-bottom: 8px;
}

hr.dashed {
  border-top: 1px dashed #8c8b8b;
}

hr.small {
  max-width: 40px;
}

@media(min-width: 720px) {
  .section {
    padding: 32px;
    border: 1px solid rgba(192, 192, 192, 0.10);
  }

  .article,
  .section header {
    padding: 0;
    text-align: left;
  }
}

@media(min-width: 1024px) {
  #involvement {
    margin: 0 auto;
    padding-bottom: 36px;
  }

  .section {
    font-size: 130%;
  }

  .article,
  .section header {
    padding: 0;
  }

  .section img {
    margin-bottom: 0;
    max-width: 500px;
    padding-right: 36px;
    float: left;
  }

  .content {
    margin-top: 16px;
  }

  .article {}
}
</style>
