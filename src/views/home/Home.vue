<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-bar-control :titles="['流行','新款','精选']" @tabClick='tabClick' ref="tabControl2" v-show="isTabControl"
      class="tabControl2">
    </tab-bar-control>

    <scroll class="content" ref='scroll' :probe-type='3' @scroll='currentPos' :pull-up-load='true'
      @pullingUp='loadMore'>
      <home-swiper v-if="banners!=''" :banners='banners' @swiperImg='swiperImg'></home-swiper>

      <recommend-View :recommends='recommends'></recommend-View>

      <feture-view></feture-view>
      <!-- @tabClick接收从子组件传入的数据 -->
      <tab-bar-control :titles="['流行','新款','精选']" @tabClick='tabClick' ref="tabControl">
      </tab-bar-control>

      <good-list :goods='showGoods' ref="goodList"></good-list>
    </scroll>

    <back-to class="BackTo" @click.native='backTop' v-show="isShow"></back-to>

  </div>
</template>

<script>
  //导入导航栏
  import NavBar from 'components/common/navbar/NavBar'
  //导入轮播图
  import HomeSwiper from './childComps/homeSwiper'
  //导入横向分类图
  import RecommendView from './childComps/recommendView'
  //导入图片
  import FetureView from './childComps/fetureView'
  //导入控制项
  import TabBarControl from 'components/content/tabbarcontrol/TabBarControl'
  // 导入商品列表
  import GoodList from 'components/content/goodlist/GoodList'
  //导入BScroll滚动插件的封装模板
  import scroll from 'components/content/scroll/Scroll'
  //导入点击回到顶部图标
  import BackTo from 'components/content/backto/BackTo'
  //导图外部js工具
  import { debounce } from 'common/util'
  import { getHomeMultidata, getHomeData } from 'networks/home'


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FetureView,
      TabBarControl,
      GoodList,
      scroll,
      BackTo
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] },
        },
        currentGood: 'pop',//记录当前点击的分类
        isShow: false,      //记录backTop的显示
        isTabControl: false,//记录导航栏的显示
        tabContolIndex: 0,   //同步上下两个导航栏的点击
        tabControlPosition: 0,//记录在什么位置显示导航栏2
        //解决当滑动一个页面时，点击另外一个分类，会滑动到相同的位置的问题（没有完全解决）
        // 问题：当一个页面上拉加载更多后，如果其它页面都没有上拉加载更多，则从其它页面返回时位置错误
        // 因为当一个页面上拉加载后，高度会增加，而其它两个页面的高度没有变化，那么从这两个页面到增加了高度的页面，就无法到达
        saveP: 0,
        saveN: 0,
        saveS: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentGood].list;
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata();

      //2. 请求商品列表
      this.getHomeData('pop');
      this.getHomeData('sell');
      this.getHomeData('new');



    },
    mounted() {
      // 1.监听图片
      const refresh = debounce(this.$refs.scroll.refresh, 100);

      // 3. 监听图片加载完成（系统总线）,（监听的操作最好不要放在create中）
      this.$bus.$on('itemImgLoad', () => {
        // this.$refs.scroll.refresh();
        refresh();
      })

      // 2. 获取offsettop值,如果要获取一个组件中的元素值，需要用$el
      //这儿直接得到的值是不准确的，因为轮播的图片没有加载完成
      // console.log(this.$refs.tabControl.$el.offsetTop);


    },
    methods: {
      // 监听轮播图是否加载完成
      swiperImg() {
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabControlPosition = this.$refs.tabControl.$el.offsetTop;
        //点击tabControl后跳转的初始位置
        this.saveP = this.saveS = this.saveN = -this.tabControlPosition;
      },
      // 点击分类类转换的方法
      tabClick(index) {
        // console.log('S:' + this.saveS + '\nN:' + this.saveN + '\nP:' + this.saveP);
        switch (index) {
          case 0:
            this.currentGood = 'pop';
            this.$refs.scroll.scrollTo(0, this.saveP, 0);
            // console.log(this.saveP);
            break;
          case 1:
            this.currentGood = 'sell';
            this.$refs.scroll.scrollTo(0, this.saveS, 0);
            break;
          case 2:
            this.currentGood = 'new';
            this.$refs.scroll.scrollTo(0, this.saveN, 0);
            break;
        }
        this.$refs.tabControl.curentIndex = index;
        this.$refs.tabControl2.curentIndex = index;

      },
      //当下拉到一定高度出现回到顶部的小图标
      currentPos(position) {
        //1. 出现backTop
        this.isShow = -position.y > 2000;

        //2. 出现tabControl
        this.isTabControl = -position.y > this.tabControlPosition;

        //3. 得到y坐标的值
        switch (this.currentGood) {
          case 'pop':
            this.saveP = position.y;
            break;
          case 'sell':
            this.saveS = position.y;
            break;
          case 'new':
            this.saveN = position.y;
            break;
        }
      },
      //调用回到顶部的方法
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 500);

      },
      //下拉加载更多
      loadMore() {
        this.getHomeData(this.currentGood);
      },


      /**
       * 网络请求相关的代码
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          this.recommends = res.data.recommend.list;
          // console.log(this.recommends);
          this.banners = res.data.banner.list;
        })
      },
      getHomeData(type) {
        const page = this.goods[type].page + 1;
        getHomeData(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          this.$refs.scroll.finished();
        })
      },


    },
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
    position: relative;
  }

  .home-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-tint);
    color: white;
    z-index: 9;
  }


  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }

  .BackTo {

    position: fixed;
    right: 10px;
    bottom: 55px;
    /* z-index: 10; */
  }

  .tabControl2 {
    position: relative;
    z-index: 9;
  }
</style>