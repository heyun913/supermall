<template>
  <div class="good-list">
    <good-list-item v-for="(item, index) in goods" :key="index" :good-item='item'>
    </good-list-item>
  </div>
</template>

<script>
  import GoodListItem from './GoodListItem'

  export default {
    name: "GoodList",
    components: {
      GoodListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .good-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 0 2px;
  }
</style>