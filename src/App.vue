<template>
  <Login>
  <app-header class="mb-3" />
  <div class="container"><router-view /></div>
  </Login> 
</template>

<script>
import Header from "./components/Header";
import Login from "./pages/Login";

export default {
  name: "App",
  components: {
    "app-header": Header,
    Login,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
