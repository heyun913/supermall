<template>
  <div id="app">
    <!-- 保留离开时的页面状态 -->
    <!-- exclude='Detail'不能让detail组件保证活跃，否则当从主页点击其它商品信息时无法刷新 -->
    <keep-alive exclude='Detail'>
      <router-view></router-view>
    </keep-alive>
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar
    }
  }
</script>

<style>
  @import url('assets/css/base.css');
</style>