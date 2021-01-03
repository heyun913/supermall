<template>
  <div class="Items" @click='itemClick'>
    <img :src="goodItem.show.img" alt="" @load='imgLoad'>
    <p>{{goodItem.title}}</p>
    <span class="price">{{goodItem.price}}</span>
    <span class="collect">收藏：{{goodItem.cfav}}</span>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      goodItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      //发送图片加载完成的事件
      imgLoad() {
        this.$bus.$emit('itemImgLoad');
      },
      itemClick() {
        this.$router.push('/detail/' + this.goodItem.iid);
      }
    },
  }
</script>

<style scoped>
  .Items {
    width: 48%;
    /* height: 268px; */
    position: relative;

    margin-bottom: 5px;
  }

  .Items img {
    width: 100%;
    height: 80%;
    border-radius: 5px;
  }

  .Items p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 5px 0;
  }

  .Items .price {
    color: orange;
    padding-right: 8px;
  }
</style>