<template>
  <Swiper class="sp">
    <SwiperItem v-for="(item, index) in topImages" :key="index">
      <img :src="item" alt="" @load='imgLoad'>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper/index'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isTrue: false
      }
    },
    methods: {
      imgLoad() {
        if (!this.isTrue) {
          this.$emit('imgLoad');
          this.isTrue = true;
        }
      }
    },
  }
</script>

<style scoped>
  .sp {
    height: 300px;
    overflow: hidden;
  }
</style>