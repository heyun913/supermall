<template>
  <div>
    <nav-bar class="navBar">
      <div slot="center">购物车({{getCartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import { mapGetters } from 'vuex'
  export default {
    name: "CarNavBar",
    components: {
      NavBar
    },
    computed: {
      ...mapGetters([
        'getCartLength',
      ])
    },
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  .navBar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>