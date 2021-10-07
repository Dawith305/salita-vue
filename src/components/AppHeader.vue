<template>
 <div class="header">
      <h1 class="header-title">Salita</h1>
      <font-awesome-icon icon="bars" size="2x"/>
 </div>
</template>

<script>
export default {
    name: "AppHeader"
}
</script>

<style scoped>
.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
}
.header-title{
    color: #ff5b24;
}
</style>