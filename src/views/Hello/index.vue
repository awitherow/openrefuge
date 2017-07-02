<template>
  <div id="hello" class="container">

    <div class="background"></div>

    <div class="introduction">
      <h1>{{ $t("brand.title") }}</h1>
      <h2>{{ $t("brand.subtitle") }}</h2>
      <p v-html="$t('brand.description')" />

      <div class="button-container">
        <router-link class="button green" to="/find-help">
          {{ $t("views.hello.button-find_help") }}
        </router-link>
        <router-link class="button" to="/get-involved">
          {{ $t("views.hello.button-get_involved") }}
        </router-link>
      </div>
    </div>

    <div class="project-showcase">
      <h2>Featured Projects</h2>
      <div class="projects">
        <div v-for="project in projects" class="project">
          <h3>{{ project.name }}</h3>
          <div class="project-content">
            <img :src="project.img" />
            <div class="project-direction">
              <p v-for="p in project.description" v-html="p" />
              <div class="button-container">
                <a v-for="button in project.buttons" target="_blank" :href="button.link" :class="button.class">{{ button.text }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      projects: this.$t('projects')
    }
  }
}
</script>

<style scoped>
.background {
  background: url(../../../static/help.jpg) no-repeat center center;
  background-size: cover;
  position: fixed;
  height: 200px;
}

.introduction h1 {
  margin-bottom: 8px;
}

.introduction h2 {
  margin-top: 0;
  margin-bottom: 0;
}

.introduction p {
  margin: 10px 0 20px 0;
}

.button-container {
  min-height: 64px;
}

.button-container .button {
  margin-right: 10px;
}

.project-showcase {
  margin-bottom: 50px;
}

.project-showcase h2 {
  margin-bottom: 0;
}

.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.project {
  text-align: center;
}

.project img {
  min-width: 200px;
  min-height: 200px;
  height: 200px;
  width: 200px;
  border-radius: 100px;
}

.project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.project-direction {
  text-align: center;
}

@media(min-width: 768px) {
  .projects {
    justify-content: flex-start;
  }

  .project {
    text-align: left;
  }

  .project-content {
    flex-direction: row;
  }

  .project-direction {
    text-align: left;
    margin-left: 15px;
  }
}
</style>
