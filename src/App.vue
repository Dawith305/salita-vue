<template>
  <app-header />
  <my-projects />
</template>

<script>
import AppHeader from "./components/layouts/AppHeader.vue";
import MyProjects from "./pages/MyProjects.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    MyProjects,
  },
};
</script>

<style lang="scss">
:root {
  --circle-size: 16px;
  --spacing: 6px;
  --salita-color: #ff5b24;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 400;
  color: #2c3e50;
  margin: 0px 200px 60px 200px;
  padding: 0px 50px;
}

.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.column {
  display: flex;
  flex-direction: column;
}
</style>
