<template>
  <div class="row project-container" :style="cardStyle">
    <div class="column">
      <div class="row project-attacted-file">
        <mdicon name="clipboard-list-outline" />
        <p class="project-id">#{{data.id}}</p>
        <p>{{data.fileName}}</p>
      </div>

      <div class="row project-translation-requested">
        <font-awesome-icon class="globeIcon" icon="globe" />
        <dotted-bullet :from="data.from" :to="data.to"/>
        <!-- <div class="project-languages">
          <ul>
            <li><b>{{data.from?.language}}</b> {{data.from?.code}}</li>
            <li><b>{{data.to?.language}}</b> {{data.to?.code}}</li>
          </ul>
        </div> -->
      </div>
    </div>
    <div class="column project-right-section">
      <user-view :manager="data.manager" :bg="data.userNameBg"></user-view>
      <div class="row project-info">
        <mdicon v-if="data.numberOfDoc" :width="20" :height="20" name="clipboard-list-outline" />
        <p>{{data.numberOfDoc}}</p>
        <p>Order: <b>{{data.orderNo}}</b></p>
        <mdicon :width="20" :height="20" name="clock-time-four-outline"/>
        <p>Tidsfrist: <b>{{data.date}}</b></p>
      </div>
    </div>
  </div>
</template>

<script>
import DottedBullet from '../DottedBullet.vue';
import UserView from "../UserView.vue";


export default {
  props:{
      data: {
          type: Object
      }
  },
  components: { UserView, DottedBullet },
  name: "TranslationProject",
  computed: {
    cardStyle() {
      return {
        "background-color": this.data.cardBg,
        "border": this.data.cardBg == "#fff" ? "2px solid rgb(224, 219, 219)" : "none"
      };
    }
  }

};
</script>

<style lang="scss" scoped>
.project-container {
  position: relative;
  justify-content: space-between;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 15px;
}
.project-right-section {
  flex-wrap: wrap;
  justify-content: space-between;
}
.project-attacted-file {
  .project-id {
    margin: 0 10px;
    font-weight: 900;
  }
}
.project-translation-requested {
  align-items: flex-start;
  .globeIcon {
    margin: 5px;
  }
}
.project-languages {
  text-align: left;
  margin-top: 0px;
  li:first-child::after {
    content: "";
    display: block;
    margin-bottom: 20px;
  }
  ul {
    margin: 0px;
    padding-inline-start: 12px;
    list-style-position: inside;
  }
}
.project-info {
  flex-grow: 1;
  margin-top: 45px;
  font-size: 15px;
  p {
       padding: 0px 6px;
       margin: 0px;
  }
}





</style>
