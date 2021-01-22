<template>
  <div class="cart">

    <!-- 1. 导航栏 -->
    <nav-bar></nav-bar>

    <!-- 2. BS滚动 -->
    <scroll class="content" ref="scroll">
      <!-- 3. 商品数据 -->
      <cart-list>
      </cart-list>

    </scroll>

    <!-- 3. 结算栏 -->
    <bootom-bar></bootom-bar>
  </div>
</template>

<script>
  // 1. 导入导航栏
  import NavBar from './childComponets/CartNavBar.vue'
  // 2. 导入滚动
  import scroll from 'components/content/scroll/Scroll'
  // 3. 导入 商品数据
  import CartList from './childComponets/CartListItem.vue'
  // 4. 导入结算栏
  import BootomBar from './childComponets/CartBootomBar.vue'
  export default {
    name: "Cart",
    components: {
      NavBar,
      scroll,
      CartList,
      BootomBar
    },
    activated() {
      // 1. 从其它页面进入购物车对BS的滚动进行刷新
      this.$refs.scroll.refresh();
    },
  }
</script>

<style scoped>
  .cart {
    height: 100vh;
  }

  .content {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
</style>