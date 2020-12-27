<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper :banners='banners'></home-swiper>

    <recommend-View :recommends='recommends'></recommend-View>

    <feture-view></feture-view>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
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
  import { getHomeMultidata } from 'networks/home'
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FetureView
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        this.recommends = res.data.recommend.list;
        // console.log(this.recommends);
        this.banners = res.data.banner.list;
      })
    },
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
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
</style>