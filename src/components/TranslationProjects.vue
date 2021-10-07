<template>
  <div class="projects-container">
    <tab/>
    <div class="row filter-icon">
        <mdicon name="tune-vertical" />
        <p>Filter</p>
    </div>
    <div v-for="(project) in translationProjects" :key="project.id">
        <traslation-project v-bind:data="project"/>
    </div>
  </div>
</template>

<script>
import Tab from './Tab.vue';
import TraslationProject from "./TranslationProject.vue";

export default {
  name: "TranslationProjects",
  data() {
      return {
          translationProjects: [
              {
                  id: 74923,
                  fileName: '[1] 2021-08-12 Sette opp Frilans ENK profile.pdf',
                  from: {
                      language: "Norsk",
                      code: "nb"
                  },
                  to: {
                      language: "Arabsik",
                      code: "arb"
                  },
                  manager: {
                      name: "William - Prosjektleder - Kontrollerer dok.",
                      image: "user-1.png"
                  },
                  numberOfDoc : "+4 dokumenter",
                  orderNo: "4323",
                  date: "3d 4H",
                  userNameBg: "#cab06e",
                  cardBg: '#fff',
              },
              {
                  id: 74924,
                  fileName: '[1] 2021-08-12 Sette opp Frilans ENK profile.pdf',
                  from: {
                      language: "Norsk",
                      code: "nb"
                  },
                  to: {
                      language: "Arabsik",
                      code: "arb"
                  },
                  manager: {
                      name: "Robert - Oversetter - Pagar",
                      image: "user-1.png"
                  },
                  numberOfDoc : "",
                  orderNo: "321",
                  date: "1d 3h",
                  userNameBg: "#4fa99c",
                  cardBg: '#c9e4e2',
              },
              {
                  id: 74925,
                  fileName: '[1] 2021-08-12 Sette opp Frilans ENK profile.pdf',
                  from: {
                      language: "Norsk",
                      code: "nb"
                  },
                  to: {
                      language: "Arabsik",
                      code: "arb"
                  },
                  manager: {
                      name: "Heidi - Oversetter - Korrekturleser",
                      image: "user-1.png"
                  },
                  numberOfDoc : "+4 dokumenter",
                  orderNo: "542",
                  date: "0d 2H",
                  userNameBg: "#373875",
                  cardBg: '#cfc9d0',
              }
          ]
      }
  },
  components: {
    Tab,
    TraslationProject,
  }
   
};
</script>

<style lang="scss" scoped>
.projects-container{
    border-radius: 10px;
    background-color: white;
    padding: 15px 40px;
    box-shadow: 0 0 13px 0 rgb(0 0 0 / 10%);
}
.filter-icon{
    justify-content: flex-end;
    padding: 5px 0px;
    color: rgb(131, 127, 127);
    p {
        font-weight: 600;
        margin-left: 10px;
    }
}
</style>
