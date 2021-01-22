<template>
  <div id="shop">
    <div class="shop-logo">
      <img :src="shopInfo.logo" alt="">
      <span>{{shopInfo.name}}</span>
    </div>
    <div class="shop-info">
      <div class="left">
        <span>{{shopInfo.sells}}</span>
        <span>总销量</span>
      </div>
      <div class="center">
        <span>{{shopInfo.goodsCount}}</span>
        <span>全部宝贝</span>
      </div>
      <div class="right">
        <span v-for="(item, index) in shopInfo.score" :key="index" class="info">
          <span>{{item.name+' '+item.score}}</span>
          <span v-if="item.isBetter === true" class="high">高</span>
          <span v-else class="low">低</span>
        </span>
      </div>
    </div>
    <div class="shop-url">
      <a :href="shopInfo.shopUrl">
        进店逛逛
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props: {
      shopInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #shop {
    height: 265px;
    box-shadow: 0px 2px 4px 1px rgba(22, 22, 22, 0.2);
    background-color: #fff;
  }

  .shop-logo img {
    vertical-align: middle;
    width: 80px;
    height: 80px;
    border-radius: 999px;
    margin: 10px;
    border: 3px solid gray;
  }

  .shop-logo span {
    font-size: 20px;
    color: black;
  }

  .shop-info {
    display: flex;
    justify-content: space-around;
    text-align: center;
    align-items: center;
  }

  .shop-info .left {
    display: flex;
    flex-direction: column;
    height: 76px;
    align-items: center;
  }

  .shop-info .left span {
    padding: 5px;
  }

  .shop-info .center {
    width: 100px;
    display: flex;
    flex-direction: column;
    height: 76px;
    align-items: center;
    border-right: 2px solid gray;
  }

  .shop-info .center span {
    padding: 5px 0;
  }

  .shop-info .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
  }


  .shop-info .right .info {
    display: flex;
    height: 28px;
    width: 122px;
    justify-content: space-between;
    align-items: center;
  }

  .shop-info .right .high {
    background-color: red;
    color: white;
  }

  .shop-info .right .low {
    background-color: green;
    color: white;
  }

  .shop-url {
    width: 100px;
    height: 40px;
    border-radius: 30px;
    background-color: rgb(228, 231, 245);
    text-align: center;
    line-height: 40px;
    margin: 10px auto;
  }
</style>