<template>
  <Tarbar>
    <!-- activeColor='blue'可以改变活跃时的颜色 -->
    <TabBarItems path='/home'>
      <img slot="item-icon" src="~assets/img/shouye.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/shouye_actived.svg" alt="">
      <div slot="item-txt">首页</div>
    </TabBarItems>
    <TabBarItems path='/category'>
      <img slot="item-icon" src="~assets/img/fenlei.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/fenlei_actived.svg" alt="">
      <div slot="item-txt">分类</div>
    </TabBarItems>
    <TabBarItems path='/cart'>
      <img slot="item-icon" src="~assets/img/icon-.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/icon_actived.svg" alt="">
      <div slot="item-txt">购物车</div>
    </TabBarItems>
    <TabBarItems path='/profile'>
      <img slot="item-icon" src="~assets/img/wode.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/wode_actived.svg" alt="">
      <div slot="item-txt">我的</div>
    </TabBarItems>
  </Tarbar>
</template>

<script>
  import Tarbar from 'components/common/Tarbar/tabar'
  import TabBarItems from 'components/common/Tarbar/tabarItems'
  export default {
    name: "MainTabBar",
    components: {
      Tarbar,
      TabBarItems
    }
  }
</script>

<style scoped>
</style>