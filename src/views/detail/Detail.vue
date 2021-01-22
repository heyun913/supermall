<template>
  <div id="detail">
    <!-- 1. 导航栏 -->
    <nav-bar class="navBar" @itemClick='Click' ref="nav"></nav-bar>
    <!-- <div>{{$store.state.cartList}}</div> -->
    <!-- 4. 滚动 -->
    <scroll class="content" :probe-type='3' ref="scroll" @scroll='currentPos'>
      <!-- 2. 轮播图 -->
      <detail-swiper v-if="topImages!=''" :top-images="topImages" @imgLoad='imgLoad' />
      <!-- <detail-swiper :topImages='topImages'></detail-swiper> -->

      <!-- 3. 商品介绍数据 -->
      <detail-goods-info v-if="goods!=null" :goods='goods'></detail-goods-info>

      <!-- 4. 店铺介绍数据 -->
      <detail-shop v-if="shopInfo!=null" :shopInfo='shopInfo'></detail-shop>

      <!-- 5. 模特穿着展示 -->
      <detail-model-info v-if="detailInfo!=null" :modelInfo='detailInfo' @imgLoad='modelImgLoad'></detail-model-info>

      <!-- 6. 商品的尺码等数据 -->
      <detail-goods v-if="goodsInfo!=null" :goodsInfo='goodsInfo' ref="dGoods"></detail-goods>

      <!-- 8. 评论数据 -->
      <detail-rate v-if="rate!=null" :rate='rate' ref="dRate"></detail-rate>

      <!-- 9. 推荐商品数据 -->
      <good-list :goods='showGoods' class="recommend" ref="dRecommend"></good-list>
    </scroll>

    <!-- 7. 回到顶部的按钮(记住组件点击要加native) -->
    <back-to class="backTo" @click.native='backTo' v-if="showBackTo">
    </back-to>
    <detail-bootom-bar @addCart='addCart'></detail-bootom-bar>
  </div>

</template>

<script>
  //导入导航栏
  import NavBar from './childComps/DetailNavBar.vue'
  // 导入轮播图
  import DetailSwiper from './childComps/DetailSwiper.vue'
  // 导入商品介绍数据
  import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
  // 导入店铺介绍数据
  import DetailShop from './childComps/DetailShop.vue'
  //导入模特穿着展示
  import DetailModelInfo from './childComps/DetailModelInfo.vue'
  // 导入商品尺码等数据
  import DetailGoods from './childComps/DetailGoods.vue'
  // 导入BS滚动
  import scroll from 'components/content/scroll/Scroll'
  // 导入回到顶部
  import BackTo from 'components/content/backto/BackTo'
  // 导入评论数据
  import DetailRate from './childComps/DetailRate.vue'
  // 导入推荐商品列表
  import GoodList from 'components/content/goodlist/GoodList'
  // 导入下方导航栏
  import DetailBootomBar from './childComps/DetailBootomBar.vue'
  // 导入网络请求数据
  import { getDetail, getRecommend, Goods, Shop, GoodsInfo } from 'networks/detail'
  //导入 防抖函数
  import { debounce } from 'common/util'
  //混入
  import { itemImgListenerMixIn } from 'common/mixin'
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,//商品的ID
        topImages: [],//存放轮播图的数组
        goods: null,//商品的介绍数据
        shopInfo: null,//店铺数据
        detailInfo: null,//模特穿着效果的图片对象
        goodsInfo: null,//商品的尺码
        showBackTo: false,//回到顶部
        rate: null,//评论
        showGoods: [],//推荐更多的商品
        itemImgListener: null,//与home页面一样，退出页面时取消总线监听
        propsPosition: 0,//点击参数，页面跳转的位置
        commentPosition: 0,//点击评论，页面跳转的位置
        recommendsPosition: 0,//点击推荐，页面跳转的位置
        getPosition: null,//得到三个位置的函数，用于防抖
        currentIndex: 0,//记录导航栏4个参数的位置
      }
    },
    created() {
      // 1.得到商品的id
      this.iid = this.$route.params.iid;

      // 2.通过id请求数据
      getDetail(this.iid).then(res => {
        // console.log(res);

        // 1.得到轮播图的数据
        this.topImages = res.result.itemInfo.topImages

        // 2. 得到轮播图下方的商品介绍数据，并封装在一个对象中
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)

        //3. 得到轮播图下方的店铺介绍数据，并封装在一个对象中
        this.shopInfo = new Shop(res.result.shopInfo)

        // 4. 得到模特穿着效果展示的数据
        this.detailInfo = res.result.detailInfo

        // 5. 得到商品尺码等数据
        this.goodsInfo = new GoodsInfo(res.result.itemParams.info, res.result.itemParams.rule)

        // 6. 得到评论数据(有些评论没图片，有些完全没有评论，需要判断)
        if (res.result.rate.list && res.result.rate.list[0].length !== 0) {
          this.rate = res.result.rate.list[0];
        }

        // 7. 得到导航栏参数跳转的位置函数
        this.getPosition = debounce(() => {
          // 1. 记录页面挂载完成是，参数距离顶部的offset
          this.propsPosition = -this.$refs.dGoods.$el.offsetTop + 50;
          // 2. 记录评论的位置
          this.commentPosition = -this.$refs.dRate.$el.offsetTop + 50;
          // 3.记录推荐商品的位置
          this.recommendsPosition = -this.$refs.dRecommend.$el.offsetTop + 50;
          // console.log('HHH');
        }, 100)
      })

      //3.得到推荐更多数据
      getRecommend().then(res => {
        // console.log(res);

        // 1.得到商品数据
        if (res.data.list) {
          this.showGoods = res.data.list;
        }
      })
    },
    destroyed() {
      //这儿在destroyed中摧毁是因为，detail页面没有放在keeplive中，没有缓存，所以没有actived和deactived
      this.$bus.$off('itemImgLoad', this.itemImgListener)
    },
    components: {
      NavBar,
      DetailSwiper,
      DetailGoodsInfo,
      DetailShop,
      scroll,
      DetailModelInfo,
      DetailGoods,
      BackTo,
      DetailRate,
      GoodList,
      DetailBootomBar,
    },
    mixins: [itemImgListenerMixIn],
    mounted() {

    },
    methods: {
      // 1. 监听轮播图是否加载完成
      imgLoad() {
        // console.log("我加载完了！！");
        this.$refs.scroll.refresh();
      },
      //2. 监听模特展示的图片是否加载完
      modelImgLoad() {
        this.$refs.scroll.refresh();
        // 图片加载完后，取每个参数对应的位置
        this.getPosition();
      },
      // 3.回到顶部
      backTo() {
        this.$refs.scroll.scrollTo(0, 0, 500);
      },

      currentPos(position) {
        // 4. 达到一定高度显示回到顶部的图标
        this.showBackTo = -position.y > 1000;

        // 6. 滚到相应的位置，导航栏的参数颜色自动变化
        const p = -position.y;
        if (p >= 0 && p < -this.propsPosition) {
          this.currentIndex = 0;
        } else if (p >= -this.propsPosition && p < -this.commentPosition) {
          this.currentIndex = 1;
        } else if (p >= -this.commentPosition && p < -this.recommendsPosition - 8) {//微调
          this.currentIndex = 2;
        } else if (p >= -this.recommendsPosition - 8) {
          this.currentIndex = 3;
        }

        this.$refs.nav.currentIndex = this.currentIndex;
      },
      //5. 当导航栏点击时，滚动到相应的位置
      Click(index) {
        switch (index) {
          case 0:
            this.$refs.scroll.scrollTo(0, 0, 100);
            break;
          case 1:
            this.$refs.scroll.scrollTo(0, this.propsPosition, 300);
            break;
          case 2:
            this.$refs.scroll.scrollTo(0, this.commentPosition, 300);
            break;
          case 3:
            this.$refs.scroll.scrollTo(0, this.recommendsPosition, 300);
            break;
        }
      },

      //7. 点击加入购物车
      addCart() {
        // console.log('----');
        // 1.获取购物车需要展示的信息
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;

        // 2. 通过vuex将商品添加到购物车中
        // this.$store.cartList.push(product)
        // this.$store.commit('addCart', product);
        this.$store.dispatch('addCart', product).then(res => {
          // console.log(res);
          this.$toast.show(res);
          // console.log(this.$toast);
        });
      }
    },
  }
</script>

<style scoped>
  #detail {
    position: relative;
    background-color: #fff;
    height: 100vh;
  }

  .navBar {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content {
    height: calc(100% - 44px);
    /* overflow: hidden; */
  }

  .backTo {
    position: fixed;
    right: 0;
    bottom: 44px;
    z-index: 9;
  }

  .recommend {
    margin-top: 20px;
  }
</style>