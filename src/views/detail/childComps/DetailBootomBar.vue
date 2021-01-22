<template>
  <div id="detail-bootom-bar">
    <div class="left">
      <div class="left-items">
        <img src="~assets/img/kefu.png" alt="">
        <p>客服</p>
      </div>
      <div class="left-items">
        <img src="~assets/img/dianpu.png" alt="">
        <p>店铺</p>
      </div>
      <div class="left-items">
        <img src="~assets/img/shoucang.png" alt="">
        <p>收藏</p>
      </div>
    </div>
    <div class="center" @click='addCart'>
      <span>加入购物车</span>
    </div>
    <div class="right">
      <span>购买</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBootomBar",
    methods: {
      addCart() {
        this.$emit('addCart');
      }
    },

  }
</script>

<style scoped>
  #detail-bootom-bar {
    display: flex;
    position: fixed;
    height: 49px;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: #fff;
    text-align: center;
    line-height: 49px;
  }

  #detail-bootom-bar .left {
    width: 50%;
    display: flex;
    /* align-items: center; */
    line-height: 15px;
  }

  #detail-bootom-bar .left .left-items {
    flex: 1;
    font-size: 13px;
  }

  #detail-bootom-bar .left .left-items img {
    width: 30px;
    height: 30px;
  }

  #detail-bootom-bar .center {
    width: 25%;
    background-color: orange;
    color: #000;
  }

  #detail-bootom-bar .right {
    width: 25%;
    background-color: hotpink;
    color: #fff;
  }
</style>