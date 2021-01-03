<template>
  <Swiper>
    <SwiperItem v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load='imgLoad'>
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
  import { Swiper, SwiperItem } from 'components/common/swiper/index'

  export default {
    name: "homeSwiper",
    data() {
      return {
        isTrue: false,//因为有四张轮播图，但只需要知道一张加载完成就可以
      }
    },
    props: {
      banners: {
        type: Array,
        defalut() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imgLoad() {
        if (!this.isTrue) {
          // console.log("++++");
          this.$emit("swiperImg");
          this.isTrue = true
        }
      }
    },
  }
</script>

<style scoped>

</style>