<template>
  <div id="hello" class="container">
    <div class="centered">

      <h1>{{ $t("brand.title") }}</h1>
      <h2>{{ $t("brand.subtitle") }}</h2>

      <div class="button-container">
        <router-link class="button-link green" to="/refugees">
          {{ $t("views.hello.button-seek_help") }}
        </router-link>
        <router-link class="button-link" to="/support">
          {{ $t("views.hello.button-provide_support") }}
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
.centered {
  text-align: center;
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
