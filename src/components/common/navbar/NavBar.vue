<template>
  <div class="navBar">
    <div class="left">
      <slot name='left'></slot>
    </div>
    <div class="center">
      <slot name='center'></slot>
    </div>
    <div class="right">
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .navBar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .left,
  .right {
    width: 60px;
    /* background-color: red; */
  }

  .center {
    flex: 1;
    /* background-color: royalblue; */
  }
</style>