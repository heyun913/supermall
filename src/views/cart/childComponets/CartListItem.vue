<template>
  <cart-list>
    <div v-for="(item, index) in getCartList" :key="index" class="items">
      <div class="left">
        <img src="~assets/img/gou.png" alt="" :class="{active:item.checked}" @click='checked(index)'>
      </div>
      <div class="center">
        <img :src="item.image" alt="">
      </div>
      <div class="right" style="text-align: initial;">
        <div class="title">
          <span>{{item.title}}</span>
        </div>
        <div class="desc">
          <span>{{item.desc}}</span>
        </div>
        <div class="price">
          <span>￥{{item.price}}</span>
          <span>X{{item.count}}</span>
        </div>
      </div>
    </div>
  </cart-list>
</template>

<script>
  import CartList from './CartList.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: "CartListItem",
    components: {
      CartList
    },
    computed: {
      ...mapGetters([
        'getCartList'
      ])
    },
    methods: {
      checked(index) {
        this.getCartList[index].checked = !this.getCartList[index].checked;
      }
    },
  }
</script>

<style scoped>
  .items {
    display: flex;
    height: 200px;
    align-items: center;
    text-align: center;
    border-bottom: 2px solid lightgray;
  }

  .items .left {
    width: 10%;
    /* width: 50px; */
  }

  .items .left img {
    width: 50%;
    border: 1px solid sienna;
    border-radius: 999px;

  }

  .active {
    background-color: hotpink;
  }

  .items .center {
    height: 150px;
    width: 30%;
  }

  .items .center img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }

  .items .right {
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: space-between;
    height: 150px;
    padding: 0 20px;
  }

  .items .right .title span,
  .items .right .desc span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    color: black;
  }

  .items .right .price {
    display: flex;
    justify-content: space-between;
  }

  .items .right .price span:first-child {
    color: orange;
  }
</style>