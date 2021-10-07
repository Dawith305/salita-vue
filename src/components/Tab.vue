<template>
  <div class="tab-container row">
    <div class="active-tab">Aktive</div>
    <div class="tab">Tidligere</div>
  </div>
</template>

<script>
export default {
  name: "Tab",
};
</script>

<style>
.tab-container {
  border-bottom: 1px solid rgb(204, 202, 202);
  margin-bottom: 10px;
}
.active-tab {
  padding: 10px 40px 20px 0px;
  color: #ff5b24;
  border-bottom: 3px solid #ff5b24;
}
.tab {
  padding: 10px 40px 20px 10px;
  color: grey;
}
</style>
