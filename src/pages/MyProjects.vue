<template>
  <div>
  <div class="row header">
    <h1>
      Mine oversetterprosjekter
    </h1>
    <div class="button">
      Bestill oversettelse
    </div>
  </div>
  <translation-projects />
  </div>
</template>

<script>
import TranslationProjects from "../components/TranslationProject/TranslationProjects.vue";
export default {
  name: "MyProjects",
  components: { TranslationProjects },
};
</script>

<style lang="scss" scoped>
.header{
 justify-content: space-between;
 h1 {
   font-weight: bolder;
   color: rgb(54, 53, 53);
 }
}
.button{
  background-color: var(--salita-color);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
