<template>
  <div id="model-info">
    <div class="line1">{{modelInfo.desc}}</div>
    <div class="line1">{{modelInfo.detailImage[0].key}}</div>
    <div v-for="(item, index) in modelInfo.detailImage[0].list" :key="index" class="pic">
      <img :src="item" alt="" @load='imgLoad'>
    </div>
    <!-- <img :src="modelInfo.detailImage[0].list[0]" alt=""> -->
  </div>
</template>

<script>
  import { debounce } from 'common/util'
  export default {
    name: "DetailModelInfo",
    props: {
      modelInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      imgLoad() {
        this.$emit('imgLoad');
      }
    },
  }
</script>

<style scoped>
  #model-info .line1 {
    padding: 15px;
    color: black;
  }

  #model-info .line1:first-child {
    margin-top: 25px;
    border-radius: 10px;
    border: 2px lightblue dashed;
  }

  #model-info .pic img {
    width: 100%;
  }
</style>