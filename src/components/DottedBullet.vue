<template>
  <div class="bullet-container">
    <ol>
      <li class="bullet-item">
        <h3 class="bullet-title">{{from.language}} <span>{{from.code}}</span></h3>
      </li>
      <li class="bullet-item">
        <h3 class="bullet-title">{{to.language}} <span>{{to.code}}</span></h3>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: {
    from: {
      type: Object,
      required: true
    },
    to: {
      type: Object,
      required: true
    }
  },
  name: "DottedBullet",
};
</script>

<style lang="scss" scoped>
.bullet-container{
  ol{
    padding: 0;
    margin: 1vh 0.7vw;
  }
}
.bullet-item {
  position: relative;
  display: flex;
  gap: 0.5rem;
  &:not(:last-child){
    padding-bottom: 2.2rem;
  }

  &:before {
    content: "";
    flex: 0 0 var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    background-color: black;
    margin-top: 0.3rem;
  }

  &:not(:last-child) {
    &:after {
      content: ". . . .";
      line-height: 0.7rem;
      font-weight: 900;
      position: absolute;
      border-radius: 50%;
      left: 0;
      top: calc(var(--circle-size) + var(--spacing));
      gap: 2px;
      bottom: 2rem;
      z-index: 5000;
      transform: translateX(calc(var(--circle-size) / 3));
      width: 2px;
    }
  }
}
.bullet-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
  padding: 0px;
  margin:0px;
  white-space: nowrap;
  span{
    font-weight: 400;
  }
}
</style>