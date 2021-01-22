<template>
  <div>
    <!-- 1. 尺码 -->
    <div class="normalSize">
      <!-- <span>{{goodsInfo.tables[0][0]}}</span> -->
      <div v-for="(item, index) in goodsInfo.tables[0]" class="line">
        <span v-for="(item2, index2) in item">
          {{item2}}
        </span>
      </div>
      <div v-for="(item, index) in goodsInfo.set" class="line2">
        <span>{{item.key}}</span>
        <span>{{item.value}}</span>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    name: "DetailGoods",
    props: {
      goodsInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .normalSize {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 5px 0;
    box-shadow: 0px 2px 4px 1px rgba(22, 22, 22, 0.2);
  }

  .normalSize .line {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    border-bottom: 1px solid gray;
  }

  .normalSize .line2 {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid gray;

  }

  .normalSize .line2 span {
    display: block;
    flex: 1;
  }

  .normalSize .line2 span:last-child {
    color: hotpink;
  }
</style>