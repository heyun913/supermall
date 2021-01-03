<template>
  <div id="detail-goods-info">
    <!-- 1. 商品简介 -->
    <div class="goods-title">
      {{goods.title}}
    </div>
    <!-- 2. 商品价格 -->
    <div class="goods-price">
      <span class="new-price">{{goods.newPrice}}</span>
      <span style="text-decoration: line-through;margin: 0 5px;">{{goods.oldPrice}}</span>
      <span class="goods-discount">{{goods.discount}}</span>
      <div class="goods-info">
        <span v-for="index in goods.colums.length - 1 " :key="index">
          <!-- index是从1开始计数 -->
          {{goods.colums[index - 1]}}
        </span>
        <span>{{goods.services[goods.services.length - 1].name}}</span>
      </div>
    </div>
    <!-- 3. 商品服务 -->
    <div class="goods-service">
      <span v-for="index in goods.services.length - 1" :key="index">
        <img :src="goods.services[index - 1].icon" alt="">
        {{goods.services[index - 1].name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  #detail-goods-info {
    box-shadow: 0px 1px 4px 1px rgba(22, 22, 22, 0.2);
  }

  .goods-title {
    padding: 10px;
    font-size: 19px;
    font-weight: bold;
  }

  .goods-price {
    padding: 10px;
  }

  .goods-price .new-price {
    font-size: 26px;
    color: rgb(241, 68, 106);
  }

  .goods-price .goods-discount {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    border-radius: 3px;
    color: #ffffff;
    background-color: rgb(241, 68, 106);
    margin-top: -5px;
  }

  .goods-price .goods-info {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    height: 25px;
    border-bottom: 1px solid gray;
    font-size: 15px;
  }

  .goods-service {
    display: flex;
    height: 50px;
    justify-content: space-between;
    line-height: 25px;
    padding: 10px;
    font-size: 14px;
  }

  .goods-service img {
    height: 10px;
    width: 10px;
  }
</style>