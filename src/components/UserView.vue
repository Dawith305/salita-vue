<template>
  <div class="user-view-container">
    <div class="user-image">
      <img alt="Vue logo" :src="require(`../assets/${manager.image}`)" />
    </div>
    <div class="user-names" :style="bgColor">
      <p>{{ manager.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserView",
  props: {
    manager: {
      type: Object,
    },
    bg: {
      type: String,
    },
  },
  computed: {
    bgColor() {
      return {
        "background-color": this.bg,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.user-view-container {
  position: relative;
  justify-content: flex-end;
  display: flex;
  border-radius: 10px;
  padding: 2px;
}
.user-image {
  img {
    height: 35px;
    object-fit: contain;
  }
}
.user-names {
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  height: 35px;
  color: white;
  p {
    padding: 5px 10px;
    margin: 0px;
  }
}
</style>
