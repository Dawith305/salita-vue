<template>
  <div class="">
    <ol class="">
      <li class="bullet-item">
        <h3 class="bullet-title">Step 1</h3>
      </li>
      <li class="bullet-item">
        <h3 class="bullet-title">Step 2</h3>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "DottedBullet",
};
</script>

<style lang="scss" scoped>
.bullet-item {
  position: relative;
  display: flex;
  gap: 15px;
  padding-bottom: 60px;

  &:before {
    content: "";
    flex: 0 0 var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    background-color: lightgrey;
  }

  &:not(:last-child) {
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: calc(var(--circle-size) + var(--spacing));
      bottom: var(--spacing);
      z-index: -1;
      transform: translateX(calc(var(--circle-size) / 3));
      width: 2px;
      background-color: #e0e0e0;
    }
  }
}

.bullet-title {
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 16px;
  padding: 0px;
  margin:0px;
}
.wrapper {
  max-width: 1000px;
  margin: 35px auto 0;
}
</style>
