<template>
  <div id="hello" class="container">
    <div class="centered">

      <h1>{{ $t("brand.title") }}</h1>
      <h2>{{ $t("brand.subtitle") }}</h2>

      <div class="button-container">
        <router-link to="/refugees">
          {{ $t("views.hello.button-seek_help") }}
        </router-link>
        <router-link to="/support">
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

button {
  border: 1px solid black;
  padding: 10px;
  background: none;
  text-transform: uppercase;
  min-width: 100px;
  margin: 5px;
}
</style>
