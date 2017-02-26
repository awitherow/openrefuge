<template>
  <div id="hello" class="container">
    <div class="centered">

      <h1>{{ $t("brand.title") }}</h1>
      <h2>{{ $t("brand.subtitle") }}</h2>

      <div class="button-container">
        <router-link class="button-link green" to="/find-help">
          {{ $t("views.hello.button-find_help") }}
        </router-link>
        <router-link class="button-link" to="/take-action">
          {{ $t("views.hello.button-take_action") }}
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data: () => ({})
}
</script>

<style scoped>
h1 {
  margin-bottom: 8px;
}

h2 {
  margin-top: 0;
  margin-bottom: 32px;
}

.centered {
  text-align: center;
}

.button-container {
  min-height: 64px;
}

.button-link {
  border: 1px solid #444;
  padding: 10px;
  background: none;
  text-transform: uppercase;
  min-width: 100px;
  margin: 5px;
  text-decoration: none;
  color: #444;
  font-size: 12px;
}

.button-link.green {
  border-color: #3fb618;
  background: #3fb618;
  color: white;
}
</style>
