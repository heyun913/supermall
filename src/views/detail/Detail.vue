<template>
  <div>
    <!-- 1. 导航栏 -->
    <nav-bar></nav-bar>

    <!-- 2. 轮播图 -->
    <detail-swiper v-if="topImages!=''" :top-images="topImages" />
    <!-- <detail-swiper :topImages='topImages'></detail-swiper> -->

    <!-- 3. 商品介绍数据 -->
    <detail-goods-info v-if="goods!=null" :goods='goods'></detail-goods-info>
  </div>
</template>

<script>
  //导入导航栏
  import NavBar from './childComps/DetailNavBar.vue'
  // 导入轮播图
  import DetailSwiper from './childComps/DetailSwiper.vue'
  // 导入商品介绍数据
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  // 导入网络请求数据
  import { getDetail, Goods } from 'networks/detail'
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: null
      }
    },
    created() {
      // 1.得到商品的id
      this.iid = this.$route.params.iid;

      // 2.通过id请求数据
      getDetail(this.iid).then(res => {
        console.log(res);

        // 1.得到轮播图的数据
        this.topImages = res.result.itemInfo.topImages

        // 2. 得到轮播图下方的商品介绍数据，并封装在一个对象中
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
      })

    },
    components: {
      NavBar,
      DetailSwiper,
      DetailGoodsInfo
    }
  }
</script>

<style scoped>

</style>